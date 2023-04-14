import { ValidateSchema } from '../../types/index.d';
import { getValidate } from '../../utils/getValidate';

/* eslint-disable import/prefer-default-export */
export const registerValidate: ValidateSchema = getValidate({
  body: {
    type: 'object',
    properties: {
      contactId: { type: 'string' },
    },
    required: ['contactId'],
    additionalProperties: false,
  },
});
