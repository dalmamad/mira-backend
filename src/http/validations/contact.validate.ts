import { ValidateSchema } from '../../types/index.d';
import { getValidate } from '../../utils/getValidate';

/* eslint-disable import/prefer-default-export */
export const addContactValidate: ValidateSchema = getValidate({
  body: {
    type: 'object',
    properties: {
      contactId: { type: 'string' },
    },
    required: ['contactId'],
    additionalProperties: false,
  },
});

export const deleteContactValidate: ValidateSchema = getValidate({
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' },
    },
    required: ['id'],
    additionalProperties: false,
  },
});
