import jwt from 'jsonwebtoken';

export type ValidateSchema = {
  body?: any;
  params?: any;
  query?: any;
};
