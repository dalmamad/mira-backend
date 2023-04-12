export class NewMessageDTO {
  content: string;
  senderId: string;
  receiverId: string;
}

export class GetPvMessages {
  since: string;
  receiverId: string;
  senderId: string;
  qty: string | number;
}
