import prisma from '../client';
import ForbiddenError from '../errors/forbidden.error';
import BadRequestError from '../errors/badRequest.error';

export default class ContactServices {
  public static async findUserContacts(userId: string) {
    return await prisma.contact.findMany({
      where: {
        userId,
      },
      select: { contact: true, id: true, createdAt: true },
    });
  }

  public static async addContact(userId: string, contactId: string) {
    ContactServices.userIdContactIdNotEqual(userId, contactId);
    return await prisma.contact.create({
      data: {
        userId,
        contactId,
      },
    });
  }

  private static userIdContactIdNotEqual(userId: string, contactId: string) {
    if (userId === contactId)
      throw new BadRequestError('userId and contaId should not be equal');
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
