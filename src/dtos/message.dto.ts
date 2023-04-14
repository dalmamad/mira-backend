export class NewMessageDTO {
  content: string;
  senderId: string;
  recipientId: string;
}

export class GetPvMessages {
  since: string;
  recipientId: string;
  senderId: string;
  qty: string | number;
}
