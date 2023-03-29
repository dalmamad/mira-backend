import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import prisma from '../client';
import { RegisterDTO } from '../dtos/auth.dto';

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
}
