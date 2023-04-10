import { ValidateSchema } from '../types/index.d';
import { getValidate } from '../utils/get-validate';

export const registerValidate: ValidateSchema = getValidate({
  body: {
    type: 'object',
    properties: {
      username: { type: 'string', maxLength: 20 },
      password: { type: 'string' },
      confirmPassword: { type: 'string', const: { $data: '1/password' } },
    },
    required: ['username', 'password', 'confirmPassword'],
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
