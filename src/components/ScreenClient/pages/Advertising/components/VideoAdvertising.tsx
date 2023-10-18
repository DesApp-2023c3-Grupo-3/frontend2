import YouTube from 'react-youtube';
import { obtenerIDdeVideo } from '../../../utils/strings';
import '../../../index.css';
import { useCarouselVideo } from '../../../hooks/useCarouselVideo';
import { DataAdvertising } from '../../../store/useAdvertisingMessages';
import Dots from '../../../components/Dots';

export default function AdvertisingVideo({
  advertisingVideos,
  sx,
  withDots,
}: {
  advertisingVideos: DataAdvertising[];
  sx: string;
  withDots: boolean;
}) {
  const { selectedItem, changeSelectedItem } =
    useCarouselVideo(advertisingVideos);

  const videoId = obtenerIDdeVideo(selectedItem.payload);

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      mute: 1,
    },
  };

  return (
    <>
      <div id="youtube-player-id" className={sx}>
        <YouTube
          videoId={videoId}
          onEnd={changeSelectedItem}
          opts={opts}
          loading="lazy"
        />
      </div>
      {withDots && advertisingVideos.length > 1 && (
        <Dots
          selectedIndex={1}
          sx="absolute bottom-0"
          items={advertisingVideos}
        />
      )}
    </>
  );
}
