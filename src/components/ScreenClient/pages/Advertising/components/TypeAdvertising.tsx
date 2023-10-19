import Dots from '../../../components/Dots';
import { useCarousel } from '../../../hooks/useCarousel';
import { DataAdvertising } from '../../../store/useAdvertisingMessages';
import { useConnectionMessage } from '../../../store/useConnectionMessage';
import AdvertisingImage from './ImageAdvertising';
import AdvertisingText from './TextAdvertising';

const ADVERTISING_TYPE_IMAGE = 1;

export default function AdvertisingType({
  messages,
}: {
  messages: DataAdvertising[];
}) {
  const carouselTime = useConnectionMessage((state) => state.connectionMessage);

  const { selectedIndex, selectedItem } = useCarousel(
    messages,
    carouselTime.screen.advertisingIntervalTime,
  );

  return (
    <>
      {(selectedItem.advertisingTypeId === ADVERTISING_TYPE_IMAGE && (
        <AdvertisingImage payload={selectedItem.payload} />
      )) || <AdvertisingText payload={selectedItem.payload} />}
      {messages.length > 1 && (
        <Dots
          selectedIndex={selectedIndex}
          items={messages}
          sx="absolute bottom-0"
        />
      )}
    </>
  );
}
