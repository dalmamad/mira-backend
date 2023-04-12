import { ValidateSchema } from '../../types/index.d';
import { getValidate } from '../../utils/getValidate';

export const getPvMessagesValidate: ValidateSchema = getValidate({
  query: {
    type: 'object',
    properties: {
      since: { type: 'string', format: 'date-time' },
      receiverId: { type: 'string' },
      qty: { type: 'string', queryNumRange: { max: 50 } },
    },
    required: ['receiverId', 'since', 'qty'],
    additionalProperties: false,
  },
});

export const TempValidate: ValidateSchema = getValidate({});
