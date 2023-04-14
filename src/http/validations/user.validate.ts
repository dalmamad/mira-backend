import { ValidateSchema } from '../../types/index.d';
import { getValidate } from '../../utils/getValidate';

/* eslint-disable import/prefer-default-export */
export const searchUserValidate: ValidateSchema = getValidate({
  query: {
    type: 'object',
    properties: {
      username: { type: 'string' },
    },
    required: ['username'],
    additionalProperties: false,
  },
});
