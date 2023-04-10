import { getSocketValidate } from '../../utils/get-validate';

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
