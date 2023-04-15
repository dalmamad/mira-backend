import userDoc from './user.doc';
import authPaths from './auth.doc';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'My API',
    version: '1.0.0',
    description: 'API documentation for My API',
  },
  servers: [{ url: `http://localhost:${process.env.PORT}/api` }],
  tags: [
    {
      name: 'user',
      description: 'API endpoints for managing users',
    },
    {
      name: 'auth',
      description: 'API endpoints for managing authentications',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        name: 'Authorization',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
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
    },
  },
  paths: {
    ...userDoc,
    ...authPaths,
  },
};

export default swaggerDocument;
