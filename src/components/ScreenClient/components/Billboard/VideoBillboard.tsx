import { useSocketStore } from '../../store/socketStore';
import { splitListWithoutVideos } from '../../utils/arrays';
import Advertising from '../Advertising/Advertising';
import AdvertisingCard from '../Advertising/AdvertisingCard';
import Video from '../Video/Video';

export default function VideoBillboard() {
  const advertisingMessages = useSocketStore((state) =>
    state.getAdvertisingMessages(),
  );
  const [first, second] = splitListWithoutVideos(advertisingMessages);

  return (
    <main className="bg-[#D9D9D9] h-screen grid grid-cols-20 gap-[1vh]">
      <Advertising>
        <AdvertisingCard sx="rounded-br-2xl" messages={first} />
        <AdvertisingCard sx="rounded-tr-2xl" messages={second} />
      </Advertising>
      <Video />
    </main>
  );
}
