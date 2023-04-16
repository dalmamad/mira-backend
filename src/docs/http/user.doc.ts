export default class UserDoc {
  private static getUser = {
    tags: ['user'],
    summary: 'Get User',
    security: [
      {
        bearerAuth: [],
      },
    ],
    description: 'Return current User Information',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: {
              properties: {
                user: {
                  $ref: '#/components/schemas/User',
                },
              },
            },
          },
        },
      },
      401: {
        description: 'unauthorized error',
      },
      500: {
        description: 'Internal server error',
      },
    },
  };

  private static searchUser = {
    tags: ['user'],
    summary: 'find a User',
    description: 'Creates a new user with the provided data',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'username',
        description: 'Username',
        in: 'query',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: {
              properties: {
                user: {
                  $ref: '#/components/schemas/User',
                },
              },
            },
          },
        },
      },
      401: {
        description: 'unauthorized error',
      },
      500: {
        description: 'Internal server error',
      },
    },
  };

  public static paths = {
    '/user': { get: this.getUser },
    '/user/search': { get: this.searchUser },
  };

  public static schema = {
    User: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: 'clgibyvzb000055d45s0vnvdf',
        },
        username: {
          type: 'string',
          example: 'user1',
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
