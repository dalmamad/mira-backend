import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import prisma from '../client';
import { RegisterDTO } from '../dtos/auth.dto';
import ForbiddenError from '../errors/forbidden.error';

export default class UserServices {
  public static async createUser(
    user: Omit<RegisterDTO, 'confirmPassword'>
  ): Promise<Omit<User, 'password'>> {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    const { password, ...newUser } = await prisma.user.create({
      data: user,
    });
    return newUser;
  }

  public static async findUserById(id: string) {
    return await prisma.user.findUnique({
      where: { id },
    });
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
