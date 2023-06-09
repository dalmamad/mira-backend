import UserDoc from './user.doc';
import AuthDoc from './auth.doc';
import MessageDoc from './messeage.doc';
import ContactDoc from './contact.doc';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Mira',
    version: '0.1.1',
    description: 'API documentation for Mira',
  },
  servers: [{ url: `http://localhost:${process.env.PORT}/api` }],
  tags: [
    {
      name: 'user',
      description: 'API endpoints for managing users',
    },
    {
      name: 'message',
      description: 'API endpoints for managing messages',
    },
    {
      name: 'contact',
      description: 'API endpoints for managing contacts',
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
      ...UserDoc.schema,
      ...ContactDoc.schema,
      ...MessageDoc.schema,
    },
  },
  paths: {
    ...UserDoc.paths,
    ...AuthDoc.paths,
    ...ContactDoc.paths,
    ...MessageDoc.paths,
  },
};

export default swaggerDocument;
