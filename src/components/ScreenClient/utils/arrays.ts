import { Message } from '../store/socketStore';

export const filterMessages = (messages: Message[], topic: string) => {
  const advertisingMessages = messages.filter(
    (message) => message.topic === topic,
  );
  return advertisingMessages.map((message) => message.data);
};

export function splitList(array: any[]) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.splice(0, half);
  const secondHalf = array.splice(0, array.length);

  return [firstHalf, secondHalf];
}
