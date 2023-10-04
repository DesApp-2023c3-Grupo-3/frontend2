import Dots from '../Dots';
import unahur from '../../assets/unahur.png';
import { DataAdvertising } from '../../store/socketStore';
import { useCarousel } from '../../hooks/useCarousel';
import { itsArrayWithVideos } from '../../utils/arrays';
import Youtube from 'react-youtube';
import { obtenerIDdeVideo } from '../../utils/strings';

const TIME_CAROUSEL_ADVERTISING = 15;
const ADVERTISING_TYPE_IMAGE = 1;

function AdvertisingCard({
  messages,
  sx,
}: {
  messages: DataAdvertising[];
  sx: string;
}) {
  const { selectedIndex, selectedItem, changeSelectedItem } = useCarousel(
    messages,
    TIME_CAROUSEL_ADVERTISING,
  );

  return (
    <AdvertisingItem messages={messages} sx={sx} selectedIndex={selectedIndex}>
      {itsArrayWithVideos(messages) ? (
        <AdvertisingVideo
          payload={selectedItem.payload}
          changeSelectedItem={changeSelectedItem}
        />
      ) : (
        <AdvertisingType item={selectedItem} />
      )}
    </AdvertisingItem>
  );
}

function AdvertisingType({ item }: { item: DataAdvertising }) {
  return (
    (item.advertisingTypeId === ADVERTISING_TYPE_IMAGE && (
      <AdvertisingImage payload={item.payload} />
    )) || <AdvertisingText payload={item.payload} />
  );
}

function AdvertisingText({ payload }: { payload: string }) {
  return (
    <article className="flex justify-center items-center bg-[#E3E3E3] h-[85%] w-[85%] rounded-[10%] text-center p-1">
      <h3 className="text-[4vh] text-[#00A0D0] max-w-full overflow-hidden text-ellipsis">
        {payload}
      </h3>
    </article>
  );
}

function AdvertisingVideo({
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
      <Youtube videoId={videoId} onEnd={changeSelectedItem} opts={opts} />
    </div>
  );
}

function AdvertisingImage({ payload }: { payload: string }) {
  return (
    <div className="h-[85%] w-[85%] rounded-[10%] overflow-hidden">
      <img className="w-full h-full" src={payload} alt="Imagen de aviso" />
    </div>
  );
}

function AdvertisingItem({
  children,
  messages,
  selectedIndex,
  sx,
}: {
  children: any;
  messages: DataAdvertising[];
  selectedIndex: number;
  sx: string;
}) {
  return (
    <article
      className={`${sx} bg-white w-full flex flex-col items-center justify-center relative h-[49.4vh]`}
    >
      {messages.length > 0 ? (
        <Card sx={`${sx}`}>{children}</Card>
      ) : (
        <Card sx={sx}>
          <img src={unahur} alt="Logo de la UNAHUR" />
        </Card>
      )}
      {messages.length > 1 && (
        <Dots
          selectedIndex={selectedIndex}
          items={messages}
          sx="absolute bottom-0"
        />
      )}
    </article>
  );
}

function Card(props: any) {
  return <>{props.children}</>;
}

export default AdvertisingCard;
