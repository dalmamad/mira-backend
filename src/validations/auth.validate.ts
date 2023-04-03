import { ValidateSchema } from '../interfaces/index.interface';
import getValidate from '../utils/get-validate';

export const registerValidate: ValidateSchema = getValidate({
  body: {
    type: 'object',
    properties: {
      username: { type: 'string', maxLength: 20 },
      email: { type: 'string', format: 'email' },
      password: { type: 'string' },
      confirmPassword: { type: 'string', const: { $data: '1/password' } },
    },
    required: ['username', 'email', 'password', 'confirmPassword'],
    additionalProperties: false,
  },
});

export const loginValidate: ValidateSchema = getValidate({
  body: {
    type: 'object',
    properties: {
      username: { type: 'string', maxLength: 20 },
      password: { type: 'string' },
    },
    required: ['username', 'password'],
    additionalProperties: false,
  },
});
