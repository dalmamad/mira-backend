import { User } from '@prisma/client';
import { Socket } from 'socket.io';
import prisma from '../client';
import { NewMessageDTO, GetPvMessages } from '../dtos/message.dto';
import SocketApp from '../socket/socket';

export default class MessageServices {
  public static async saveMessage(message: NewMessageDTO) {
    return await prisma.message.create({ data: message });
  }

  public static sendMessage(socket: Socket, message: NewMessageDTO) {
    const recipientSocketId = SocketApp.users[message.recipientId];
    if (recipientSocketId) {
      socket.to(recipientSocketId).emit('/msg', message);
      return true;
    }
    return false;
  }

  public static async addToReceived(messageId: string) {
    await prisma.message.update({
      where: { id: messageId },
      data: { received: true },
    });
  }

  public static async findNewMessages(userId: string) {
    return await prisma.message.findMany({
      where: {
        recipientId: userId,
        received: false,
      },
    });
  }

  public static async addManyToReceived(userId: string) {
    return await prisma.message.updateMany({
      where: {
        recipientId: userId,
        received: false,
      },
      data: { received: true },
    });
  }

  public static async findPvMessages({
    senderId,
    recipientId,
    since,
    qty,
  }: GetPvMessages) {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        OR: [
          { senderId, recipientId },
          { senderId: recipientId, recipientId: senderId },
        ],
        createdAt: { lt: since },
      },
      take: qty as number,
    });
    return messages;
  }
}
