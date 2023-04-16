const getUser = {
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
};

const searchUser = {
  tags: ['user'],
  summary: 'Create a new user',
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
};

const userPaths = {
  '/user': { get: getUser },
  '/user/search': { get: searchUser },
};

export default userPaths;
