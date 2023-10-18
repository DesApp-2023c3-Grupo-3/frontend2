import { splitListWithoutVideos } from '../../../utils/arrays';
import Advertising from '../../../styled-components/Advertising';
import AdvertisingCard from '../../Advertising/components/AdvertisingCard';
import Video from './Video';
import MainBillboard from '../../../styled-components/MainBillboard';
import { useAdvertisingMessages } from '../../../store/useAdvertisingMessages';

export default function VideoBillboard() {
  const advertisingMessages = useAdvertisingMessages(
    (state) => state.advertisingMessages,
  );
  const [first, second] = splitListWithoutVideos(advertisingMessages);

  return (
    <MainBillboard>
      <Advertising>
        <AdvertisingCard sx="rounded-br-2xl" messages={first} />
        <AdvertisingCard sx="rounded-tr-2xl" messages={second} />
      </Advertising>
      <Video />
    </MainBillboard>
  );
}
