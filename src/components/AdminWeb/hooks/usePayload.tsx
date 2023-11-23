import { useState } from 'react';
import { Advertising } from '../types/customTypes';

export function usePayload(advertising: Advertising | undefined) {
  let text1 = '';
  let image1 = '';
  let video1 = '';

  const typeid = advertising ? advertising.advertisingType.id : 1;

  switch (typeid) {
    case 1:
      image1 = advertising ? advertising.payload : '';
      break;
    case 2:
      video1 = advertising ? advertising.payload : '';
      break;
    case 3:
      text1 = advertising ? advertising.payload : '';
      break;
    default:
      break;
  }

  const [text, setTextPayload] = useState<string>(text1);
  const [image, setImagePayload] = useState<string>(image1);
  const [video, setVideoPayload] = useState<string>(video1);
  const [type, setType] = useState<number>(typeid);

  return {
    text,
    image,
    video,
    type,
    setTextPayload,
    setImagePayload,
    setVideoPayload,
    setType,
  };
}
