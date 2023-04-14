import { ValidateSchema } from '../../types/index.d';
import { getValidate } from '../../utils/getValidate';

/* eslint-disable import/prefer-default-export */
export const getPvMessagesValidate: ValidateSchema = getValidate({
  query: {
    type: 'object',
    properties: {
      since: { type: 'string', format: 'date-time' },
      recipientId: { type: 'string' },
      qty: { type: 'string', queryNumRange: { max: 50 } },
    },
    required: ['recipientId', 'since', 'qty'],
    additionalProperties: false,
  },
});
