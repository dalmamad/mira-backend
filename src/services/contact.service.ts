import prisma from '../client';
import ForbiddenError from '../errors/forbidden.error';
import BadRequestError from '../errors/badRequest.error';

export default class ContactServices {
  public static async findUserContacts(userId: string) {
    return await prisma.contact.findMany({
      where: {
        userId,
      },
      select: {
        contact: {
          select: {
            id: true,
            username: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        id: true,
        createdAt: true,
      },
    });
  }

  public static async addContact(userId: string, contactId: string) {
    return await prisma.contact.create({
      data: {
        userId,
        contactId,
      },
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
