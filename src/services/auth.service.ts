import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import prisma from '../client';
import UnauthorizedError from '../errors/ٰunauthorized.error';

export default class AuthServices {
  public static async loginAthentication(
    username: string,
    candidatePassword: string
  ): Promise<Omit<User, 'password'>> {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user || !this.checkPassword(candidatePassword, user.password))
      throw new UnauthorizedError('username or password not valid');
    const { password, ...noPassUser } = user;
    return noPassUser;
  }

  public static checkPassword(
    candidatePassword: string,
    userPassword: string
  ): boolean {
    return bcrypt.compareSync(candidatePassword, userPassword);
  }
}
