const userDoc = {
  '/user': {
    get: {
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
                $ref: '#/components/schemas/User',
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
    },
    post: {
      tags: ['user'],
      summary: 'Create a new user',
      description: 'Creates a new user with the provided data',
      parameters: [
        {
          name: 'user',
          description: 'User object',
          in: 'body',
          required: true,
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              age: {
                type: 'number',
              },
              email: {
                type: 'string',
              },
            },
          },
        },
      ],
      responses: {
        201: {
          description: 'User created',
        },
        400: {
          description: 'Bad request',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
  },
};

export default userDoc;
