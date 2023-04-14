import { getSocketValidate } from '../../utils/getValidate';

export const newMessageValidate = getSocketValidate({
  type: 'object',
  properties: {
    content: { type: 'string' },
    recipientId: { type: 'string' },
  },
  required: ['content', 'recipientId'],
  additionalProperties: false,
});

export const updateMessageValidate = getSocketValidate({});
