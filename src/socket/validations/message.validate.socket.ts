import { getSocketValidate } from '../../utils/getValidate';

export const newMessageValidate = getSocketValidate({
  type: 'object',
  properties: {
    content: { type: 'string' },
    receiverId: { type: 'string' },
  },
  required: ['content', 'receiverId'],
  additionalProperties: false,
});

export const updateMessageValidate = getSocketValidate({});
