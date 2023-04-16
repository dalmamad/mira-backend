export default class ContactDoc {
  private static addContact = {
    summary: 'Add a new Contact',
    description: 'Add a new Contact with the provided credentials',
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['contact'],
    requestBody: {
      description: 'userId of contact',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              contactId: {
                type: 'string',
                example: 'clgjg1hxw0004559ka4k216bc',
              },
            },
            required: ['contactId'],
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'User registered successfully',
        content: {
          'application/json': {
            schema: {
              properties: {
                newContact: {
                  $ref: '#/components/schemas/Contact',
                },
              },
            },
          },
        },
      },
      '400': {
        description: 'bad request',
      },
      '401': {
        description: 'unauthorized error',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  };

  private static findUserContact = {
    summary: 'find User Contacts',
    description: 'find all contacts of User',
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['contact'],
    responses: {
      '200': {
        description: 'User registered successfully',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  contact: {
                    $ref: '#/components/schemas/User',
                  },
                  id: {
                    type: 'string',
                    example: 'clgjihjpp0001555ld6zj2wt3',
                  },
                  createdAt: {
                    type: 'date',
                    example: '2023-04-16T14:37:52.525Z',
                  },
                },
              },
            },
          },
        },
      },
      '401': {
        description: 'unauthorized error',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  };

  public static paths = {
    '/contact': { post: this.addContact },
    '/contact/all': { get: this.findUserContact },
  };

  public static schema = {
    Contact: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: 'clgibyvzb000055d45s0vnvdf',
        },
        userId: {
          type: 'string',
          example: 'clghynyv60000559mdauoebn1',
        },
        contactId: {
          type: 'string',
          example: 'clgjie8zn0004550dyv2qrm4u',
        },
        createdAt: {
          type: 'date',
          example: '2023-04-15T18:47:38.073Z',
        },
        updatedAt: {
          type: 'date',
          example: '2023-04-16T18:47:38.073Z',
        },
      },
    },
  };
}
