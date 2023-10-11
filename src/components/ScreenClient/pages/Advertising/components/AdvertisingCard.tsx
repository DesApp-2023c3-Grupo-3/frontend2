import { useCarousel } from '../../../hooks/useCarousel';
import { isArrayWithVideos } from '../../../utils/arrays';
import AdvertisingItem from './ItemAdvertising';
import AdvertisingVideo from './VideoAdvertising';
import AdvertisingType from './TypeAdvertising';
import { DataAdvertising } from '../../../store/useAdvertisingMessages';
import { useConnectionMessage } from '../../../store/useConnectionMessage';

function AdvertisingCard({
  messages,
  sx,
}: {
  messages: DataAdvertising[];
  sx: string;
}) {
  const carouselTime = useConnectionMessage((state) => state.connectionMessage);

  const { selectedIndex, selectedItem, changeSelectedItem } = useCarousel(
    messages,
    carouselTime.advertisingIntervalTime,
  );

  return (
    <AdvertisingItem messages={messages} sx={sx} selectedIndex={selectedIndex}>
      {isArrayWithVideos(messages) ? (
        <AdvertisingVideo
          payload={selectedItem.payload}
          changeSelectedItem={changeSelectedItem}
          sx="h-[90%] w-full p-1 rounded-3xl overflow-hidden"
        />
      ) : (
        <AdvertisingType item={selectedItem} />
      )}
    </AdvertisingItem>
  );
}

export default AdvertisingCard;
