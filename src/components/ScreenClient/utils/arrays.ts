import { DataAdvertising, Message } from '../store/socketStore';

const ADVERTISING_TYPE_VIDEO = 2;

export const filterMessages = (messages: Message[], topic: string) => {
  const advertisingMessages = messages.filter(
    (message) => message.topic === topic,
  );
  return advertisingMessages.map((message) => message.data);
};

export function itsArrayWithVideos(array: DataAdvertising[]) {
  return array.some(element => element.advertisingTypeId === ADVERTISING_TYPE_VIDEO)
}

export function splitList(array: DataAdvertising[]) {
  if(itsArrayWithVideos(array)) {
    return splitListWithVideos(array)
  }
  else {
    return splitListWithoutVideos(array)
  }
}

function splitListWithoutVideos(array: DataAdvertising[]) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.splice(0, half);
  const secondHalf = array.splice(0, array.length);

  return [firstHalf, secondHalf];
}

function splitListWithVideos(array: DataAdvertising[]) {
  const arrayWithVideos = array.filter(element => element.advertisingTypeId === ADVERTISING_TYPE_VIDEO)
  const arrayWithoutVideos = array.filter(element => element.advertisingTypeId !== ADVERTISING_TYPE_VIDEO)

  return [arrayWithVideos, arrayWithoutVideos]
}