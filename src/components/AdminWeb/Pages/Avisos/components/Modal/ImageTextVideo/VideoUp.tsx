import { useState } from 'react';
import * as React from 'react';
import YouTube from 'react-youtube';
import { obtenerIDdeVideo } from '../../../../../../ScreenClient/utils/strings';

interface VideoUpProps {
  youtubeUrl: string;
  setYoutubeUrl: (newUrl: string) => void;
}

const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;

const validateYouTubeUrl = (url: string) => {
  return youtubeUrlPattern.test(url);
};

export const isValidateUrl = (url: string) => {
  return youtubeUrlPattern.test(url);
};

function VideoUp({ youtubeUrl, setYoutubeUrl }: VideoUpProps) {
  const [showPreview, setShowPreview] = useState<boolean>(
    isValidateUrl(youtubeUrl),
  );
  const [isValidUrl, setIsValidUrl] = useState<boolean>(true);
  let urlYT;

  const onVideoSubmit = (e: any) => {
    e.preventDefault();
    const isValid = youtubeUrlPattern.test(youtubeUrl);

    if (isValid) {
      setIsValidUrl(true);
      setShowPreview(true);
    } else {
      setIsValidUrl(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let url = e.target.value;

    // Validar la URL en cada cambio
    const videoId = validateYouTubeUrl(url);
    setIsValidUrl(videoId);
    setShowPreview(videoId);
    videoId ? setYoutubeUrl(url) : setYoutubeUrl('');
  };

  const opts = {
    height: '170',
    width: '300',
    playerVars: {
      controls: 1,
    },
  };

  return (
    <div>
      <h3 className="text-black ml-3 mt-3 select-none">URL YouTube:</h3>
      <div className="flex-col ml-[10px] h-[30px]">
        <div
          className={`bg-[#fff] rounded-[20px] w-[300px] h-[34px] flex items-center ${
            !isValidUrl ? 'border-2 border-[red]' : ''
          }`}
        >
          <input
            placeholder="www.youtube.com"
            className="pl-5 w-[280px] h-[30px] bg-[#fff] rounded-s-[20px] outline-none"
            value={urlYT}
            defaultValue={youtubeUrl}
            onChange={handleInputChange}
          />
          <button onClick={onVideoSubmit} className="">
            {flecha}
          </button>
        </div>
      </div>
      <div className="flex justify-center translate-y-[50%]">
        {showPreview && isValidUrl ? (
          <YouTube
            videoId={obtenerIDdeVideo(youtubeUrl)}
            className="translate-y-[-35%]"
            opts={opts}
          />
        ) : (
          ImgVideo
        )}
      </div>
    </div>
  );
}

const flecha = (
  <svg
    className=""
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      className=" hover:fill-[#848484] cursor-pointer"
      d="M4 5.70042L6 12L4 18.3008C4.0005 18.4284 4.04414 18.5534 4.12622 18.6625C4.20831 18.7715 4.32573 18.8605 4.46584 18.9197C4.60596 18.979 4.76347 19.0063 4.92142 18.9988C5.07937 18.9912 5.23178 18.9491 5.36223 18.8769L16.649 12.5767C17.117 12.3156 17.117 11.687 16.649 11.4252L5.36223 5.12501C5.23205 5.05208 5.07957 5.00932 4.92135 5.00136C4.76314 4.9934 4.60525 5.02055 4.46484 5.07986C4.32442 5.13918 4.20685 5.22838 4.1249 5.33779C4.04295 5.44719 3.99975 5.57261 4 5.70042Z"
      fill="#CFCFCF"
    />
  </svg>
);

const ImgVideo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
  >
    <path
      d="M90.625 81.25C90.625 82.0788 90.2958 82.8737 89.7097 83.4597C89.1237 84.0458 88.3288 84.375 87.5 84.375H12.5C11.6712 84.375 10.8763 84.0458 10.2903 83.4597C9.70424 82.8737 9.375 82.0788 9.375 81.25C9.375 80.4212 9.70424 79.6263 10.2903 79.0403C10.8763 78.4542 11.6712 78.125 12.5 78.125H87.5C88.3288 78.125 89.1237 78.4542 89.7097 79.0403C90.2958 79.6263 90.625 80.4212 90.625 81.25ZM90.625 21.875V65.625C90.625 67.2826 89.9665 68.8723 88.7944 70.0444C87.6223 71.2165 86.0326 71.875 84.375 71.875H15.625C13.9674 71.875 12.3777 71.2165 11.2056 70.0444C10.0335 68.8723 9.375 67.2826 9.375 65.625V21.875C9.375 20.2174 10.0335 18.6277 11.2056 17.4556C12.3777 16.2835 13.9674 15.625 15.625 15.625H84.375C86.0326 15.625 87.6223 16.2835 88.7944 17.4556C89.9665 18.6277 90.625 20.2174 90.625 21.875ZM64.0625 43.75C64.0623 43.2241 63.9294 42.7067 63.6761 42.2457C63.4228 41.7848 63.0572 41.3953 62.6133 41.1133L45.4258 30.1758C44.9534 29.8756 44.409 29.7079 43.8496 29.6901C43.2902 29.6722 42.7362 29.805 42.2456 30.0744C41.755 30.3438 41.3458 30.7401 41.0607 31.2218C40.7757 31.7034 40.6252 32.2528 40.625 32.8125V54.6875C40.6252 55.2472 40.7757 55.7966 41.0607 56.2782C41.3458 56.7599 41.755 57.1562 42.2456 57.4256C42.7362 57.695 43.2902 57.8278 43.8496 57.8099C44.409 57.7921 44.9534 57.6244 45.4258 57.3242L62.6133 46.3867C63.0572 46.1047 63.4228 45.7152 63.6761 45.2543C63.9294 44.7933 64.0623 44.2759 64.0625 43.75Z"
      fill="#484848"
    />
  </svg>
);

export default VideoUp;
