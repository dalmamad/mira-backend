import jwt from 'jsonwebtoken';

export type ValidateSchema = {
  body?: any;
  params?: any;
  query?: any;
};

declare global {
  namespace Express {
    interface Request {
      user: {
        id: number;
      };
    }
  }
}
