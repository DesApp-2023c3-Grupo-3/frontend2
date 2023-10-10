import { useSocketStore } from '../../store/socketStore';
import { splitListWithoutVideos } from '../../utils/arrays';
import Advertising from '../../styled-components/Advertising';
import AdvertisingCard from '../Advertising/AdvertisingCard';
import Video from './Video';
import MainBillboard from '../../styled-components/MainBillboard';

export default function VideoBillboard() {
  const advertisingMessages = useSocketStore((state) =>
    state.getAdvertisingMessages(),
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
