export default class MessageDoc {
  private static getNewMessages = {
    summary: 'get new messages',
    description: 'get unread messages',
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['message'],
    responses: {
      '200': {
        description: 'User registered successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                newMessages: {
                  type: 'array',
                  items: {
                    type: 'object',
                    $ref: '#/components/schemas/Message',
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

  private static getPvMessages = {
    summary: 'get pv messages',
    description: 'get private messages of user with another user',
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['message'],
    parameters: [
      {
        name: 'since',
        description: 'messages BEFORE this date',
        in: 'query',
        required: true,
        schema: {
          type: 'string',
          format: 'date',
          example: '2023-04-15T18:47:38.073Z',
        },
      },
      {
        name: 'qty',
        description: 'number of messages( it must be lower than 100)',
        in: 'query',
        required: true,
        schema: {
          type: 'integer',
          example: 50,
        },
      },
      {
        name: 'recipientId',
        description: 'id of recipient or contact that user chated with',
        in: 'query',
        required: true,
        schema: {
          type: 'string',
          example: 'clghypvg70004559mifezo969',
        },
      },
    ],
    responses: {
      '200': {
        description: 'User registered successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                messages: {
                  type: 'array',
                  items: {
                    type: 'object',
                    $ref: '#/components/schemas/Message',
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

  public static schema = {
    Message: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: 'clgibyvzb000055d45s0vnvdf',
        },
        content: {
          type: 'string',
          example: 'how are you?',
        },
        senderId: {
          type: 'string',
          example: 'clghynyv60000559mdauoebn1',
        },
        recipientId: {
          type: 'string',
          example: 'clgjie8zn0004550dyv2qrm4u',
        },
        received: {
          type: 'boolean',
          example: false,
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

  public static paths = {
    '/msg/new': { get: this.getNewMessages },
    '/msg/pv': { get: this.getPvMessages },
  };
}
