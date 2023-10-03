import { useCarousel } from '../../hooks/useCarousel';
import Dots from '../Dots';
import unahur from '../../assets/unahur.png';
import { DataAdvertising } from '../../store/socketStore';

const TIME_CAROUSEL_ADVERTISING = 15;
const ADVERTISING_TYPE_IMAGE = 1;
const ADVERTISING_TYPE_VIDEO = 2;

function AdvertisingCard({
  messages,
  sx,
}: {
  messages: DataAdvertising[];
  sx: string;
}) {
  const { selectedIndex, selectedItem } = useCarousel(
    messages,
    TIME_CAROUSEL_ADVERTISING,
  );

  return (
    <AdvertisingItem messages={messages} sx={sx}>
      <AdvertisingType item={selectedItem} />
      {messages.length > 1 && (
        <Dots
          selectedIndex={selectedIndex}
          items={messages}
          sx="absolute bottom-0"
        />
      )}
    </AdvertisingItem>
  );
}

function AdvertisingType({ item }: { item: DataAdvertising }) {
  return (
    (item.advertisingTypeId === ADVERTISING_TYPE_IMAGE && (
      <AdvertisingImage payload={item.payload} />
    )) ||
    (item.advertisingTypeId === ADVERTISING_TYPE_VIDEO && (
      <AdvertisingVideo payload={item.payload} />
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

function AdvertisingVideo({ payload }: { payload: string }) {
  return (
    <iframe
      className="w-full h-[90%]"
      src={payload}
      title="YouTube video player"
    ></iframe>
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
  sx,
}: {
  children: any;
  messages: DataAdvertising[];
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
    </article>
  );
}

function Card(props: any) {
  return <>{props.children}</>;
}

export default AdvertisingCard;
