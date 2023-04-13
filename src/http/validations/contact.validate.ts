import { ValidateSchema } from '../../types/index.d';
import { getValidate } from '../../utils/getValidate';

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

export const tempValidate: ValidateSchema = getValidate({});
