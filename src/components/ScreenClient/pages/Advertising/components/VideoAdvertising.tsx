import YouTube from 'react-youtube';
import { obtenerIDdeVideo } from '../../../utils/strings';
import '../../../index.css';

export default function AdvertisingVideo({
  payload,
  changeSelectedItem,
  sx,
}: {
  payload: string;
  changeSelectedItem: () => void;
  sx: string;
}) {
  const videoId = obtenerIDdeVideo(payload);

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      mute: 1,
    },
  };

  return (
    <div id="youtube-player-id" className={sx}>
      <YouTube
        videoId={videoId}
        onEnd={changeSelectedItem}
        opts={opts}
        loading="lazy"
        className="bg-red-400"
      />
    </div>
  );
}
