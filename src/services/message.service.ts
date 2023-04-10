import { User } from '@prisma/client';
import { Socket } from 'socket.io';
import prisma from '../client';
import { NewMessageDTO } from '../dtos/message.dto';
import SocketApp from '../socket/socket';

export default class MessageServices {
  public static async saveMessage(message: NewMessageDTO) {
    return await prisma.message.create({ data: message });
  }

  public static sendMessage(socket: Socket, message: NewMessageDTO) {
    const receiverSocketId = SocketApp.users[message.receiverId];
    socket.to(receiverSocketId).emit('/msg', message);
  }
}
