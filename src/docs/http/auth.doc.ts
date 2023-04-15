const authPaths = {
  '/auth/register': {
    post: {
      summary: 'Register a new user',
      description: 'Register a new user with the provided credentials',
      tags: ['auth'],
      requestBody: {
        description: 'User credentials',
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                username: {
                  type: 'string',
                  example: 'user1',
                },
                password: {
                  type: 'string',
                  example: 'pass',
                },
                confirmPassword: {
                  type: 'string',
                  example: 'pass',
                },
              },
              required: ['username', 'password', 'confirmpassword'],
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
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        '400': {
          description: 'bad request',
        },
        '500': {
          description: 'Internal server error',
        },
      },
    },
  },
  '/auth/login': {
    post: {
      summary: 'login user',
      description: 'login user with the provided credentials',
      tags: ['auth'],
      requestBody: {
        description: 'User credentials',
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                username: {
                  type: 'string',
                  example: 'user1',
                },
                password: {
                  type: 'string',
                  example: 'pass',
                },
              },
              required: ['username', 'password'],
            },
          },
        },
      },
      responses: {
        '200': {
          description: 'User Successfully logged in',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  token: {
                    type: 'string',
                    example:
                      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGdoeW55djYwMDAwNTU5bWRhdW9lYm4xIiwiaWF0IjoxNjgxNTg1OTM4LjU4NiwiZXhwIjoxNjgyODgxOTM4LjU4Nn0._KX8tMqftE9C4gP4Q-AV3Ub0TvbhLEVrI4HOjjFRe0I',
                  },
                  user: {
                    $ref: '#/components/schemas/User',
                  },
                },
              },
            },
          },
        },
        '400': {
          description: 'Invalid request body',
        },
        '500': {
          description: 'Internal server error',
        },
      },
    },
  },
};

export default authPaths;
