import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import prisma from '../client';
import { RegisterDTO } from '../dtos/auth.dto';
import ForbiddenError from '../errors/forbidden.error';
import exclude from '../utils/exclude';

export default class UserServices {
  public static async findUserContacts(userId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: { contacts: true },
    });
    console.log(user);
    return user?.contacts;
  }

  public static async isContact(userId: string, targetId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: { contacts: true },
    });
    const contact = user?.contacts.find((c) => c.id === targetId);
    if (!contact) throw new ForbiddenError('Is Not Your Contacts');
  }
}
