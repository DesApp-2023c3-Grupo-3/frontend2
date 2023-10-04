import YouTube from 'react-youtube';
import { obtenerIDdeVideo } from '../../utils/strings';

export default function AdvertisingVideo({
  payload,
  changeSelectedItem,
}: {
  payload: string;
  changeSelectedItem: () => void;
}) {
  const videoId = obtenerIDdeVideo(payload);

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
    },
  };

  return (
    <div id="youtube-player-id" className="h-[65%] w-full p-1">
      <YouTube
        videoId={videoId}
        onEnd={changeSelectedItem}
        opts={opts}
        loading="lazy"
      />
    </div>
  );
}
