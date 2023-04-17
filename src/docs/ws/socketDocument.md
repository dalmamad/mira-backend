# WebSocket Document

## Connection and Authentication

to connect to server you need to send `token` for authentication.
for example in react:

```typescript
import { io } from 'socket.io-client';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGdnY3NvMzAwMDAwNTU3MXplb2g4d21wIiwiaWF0IjoxNjgxNDY4MDU5LjY1OCwiZXhwIjoxNjgyNzY0MDU5LjY1OH0.3WjIumF-HALlasR6OpstzzZFdnDeNzQcYlwwrzmv7MQ';
const URL = 'http://localhost:3040';

const socket = io(URL, { auth: { token } });
```

## Connection Error

to handle connection error:

```typescript
socket.on('connect_error', (err) => {
  console.log(err.message);
});
```

## Listening to Events

after connection was established you can listen to events.

- ### on('/msg')
  **description:** this listener is responsible for receiving new messages.

```typescript
// data explanation
const payload = {
  description: ' data that has been sent to this user',
  type: 'object',
  properties: {
    senderId: {
      description: 'id of user who sent message',
      type: 'string',
      example: 'clggcswxk00065571e5zv0dnt',
    },
    recipientId: {
      description: 'id of user who is listening to this event',
      type: 'string',
      example: 'clggcsuva00045571o1umbym0',
    },
    content: {
      description: 'message which has been sent for user',
      type: 'string',
      example: 'how are you?',
    },
  },
};

// Example
socket.on('/msg', (payload) => {
  const { content, senderId, recipientId } = payload;
  console.log('Message: ', content);
});
```

## Emitting Events

after connection was established you can send message.

- ### emit('/message/pv')

  **description:** this is used to send message to another user.

  ```typescript
  // payload explanation
  const payload = {
    description: 'data that this user send to the server',
    type: 'object',
    properties: {
      senderId: {
        description: 'id of user who sent message',
        type: 'string',
        example: 'clggcswxk00065571e5zv0dnt',
      },
      recipientId: {
        description: 'id of user who is listening to this event',
        type: 'string',
        example: 'clggcsuva00045571o1umbym0',
      },
      content: {
        description: 'message which has been sent for user',
        type: 'string',
        example: 'how are you?',
      },
    },
    required: ['senderId', 'recipientId', 'content'],
  };

  // response explanation
  // server also send a response as and Acknowledgements
  const responses = {
    ifSuccessfull: {
      description: 'if message was successfully send this response will return',
      type: 'obj',
      properties: {
        status: {
          value: true,
          description: 'message successfully saved into the server',
        },
        received: {
          type: 'boolean',
          description:
            'if true means was sent to user. if false means user did not received message and receive as soon as connect to server',
        },
      },
    },
    error: {
      description: 'message was not accepted and did not saved into the server',
      type: 'object',
      properties: {
        status: {
          value: false,
        },
        err: {
          type: 'obj',
          properties: {
            msg: {
              type: 'string',
              description: 'error message sent by sever',
              example: 'Internal Server Error',
            },
            statusCode: {
              description: 'similar to http status codes',
              type: 'integer',
              example: 400,
            },
          },
        },
      },
    },
  };
  // Example
  const payload = {
    content: 'how are you?',
    recipientId: 'clggcsuva00045571o1umbym0',
  };
  socket.emit('/message/pv', payload, (response) => {
    if (!response.status) console.log(response.err.msg);
  });
  ```

## Example

```typescript
import { io } from 'socket.io-client';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGdnY3NvMzAwMDAwNTU3MXplb2g4d21wIiwiaWF0IjoxNjgxNDY4MDU5LjY1OCwiZXhwIjoxNjgyNzY0MDU5LjY1OH0.3WjIumF-HALlasR6OpstzzZFdnDeNzQcYlwwrzmv7MQ';
const URL = 'http://localhost';

const socket = io(URL, { auth: { token } });

socket.on('connect_error', (err) => {
  console.log(err.message);
});

socket.on('/msg', (payload) => {
  const { content, senderId, recipientId } = payload;
  console.log('Message: ', content);
});

const payload = {
  content: 'how are you?',
  recipientId: 'clggcsuva00045571o1umbym0',
};
socket.emit('/message/pv', payload, (response) => {
  if (!response.status) console.log(response.err.msg);
});
```
