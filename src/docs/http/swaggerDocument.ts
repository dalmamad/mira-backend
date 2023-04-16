import UserDoc from './user.doc';
import AuthDoc from './auth.doc';
import ContactDoc from './contact.doc';

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
    },
  },
  paths: {
    ...UserDoc.paths,
    ...AuthDoc.paths,
    ...ContactDoc.paths,
  },
};

export default swaggerDocument;
