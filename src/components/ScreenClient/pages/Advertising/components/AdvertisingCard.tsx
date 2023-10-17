import { isArrayWithVideos } from '../../../utils/arrays';
import AdvertisingItem from './ItemAdvertising';
import AdvertisingVideo from './VideoAdvertising';
import AdvertisingType from './TypeAdvertising';
import { DataAdvertising } from '../../../store/useAdvertisingMessages';

function AdvertisingCard({
  messages,
  sx,
}: {
  messages: DataAdvertising[];
  sx: string;
}) {
  return (
    <AdvertisingItem sx={sx}>
      {isArrayWithVideos(messages) ? (
        <AdvertisingVideo
          advertisingVideos={messages}
          sx="h-[80%] w-full p-1 rounded-3xl overflow-hidden"
          withDots={true}
        />
      ) : (
        <AdvertisingType messages={messages} />
      )}
    </AdvertisingItem>
  );
}

export default AdvertisingCard;
