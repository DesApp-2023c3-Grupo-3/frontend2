import { DataAdvertising } from '../../store/socketStore';
import { useCarousel } from '../../hooks/useCarousel';
import { itsArrayWithVideos } from '../../utils/arrays';
import AdvertisingItem from './ItemAdvertising';
import AdvertisingVideo from './VideoAdvertising';
import AdvertisingType from './TypeAdvertising';

const TIME_CAROUSEL_ADVERTISING = 15;

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

export default AdvertisingCard;
