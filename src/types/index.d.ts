import 'socket.io';

export type ValidateSchema = {
  body?: any;
  params?: any;
  query?: any;
};

declare module 'socket.io' {
  interface Socket {
    user: { id: string };
  }
}

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
  }
}
