import { useState } from 'react';

export function usePayload() {
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [video, setVideo] = useState<string>('');

  const setTextPayload = (newText: string) => {
    setText(newText);
  };

  const setImagePayload = (newImage: string) => {
    setImage(newImage);
  };

  const setVideoPayload = (newVideo: string) => {
    setVideo(newVideo);
  };

  return {
    text,
    image,
    video,
    setTextPayload,
    setImagePayload,
    setVideoPayload,
  };
}
