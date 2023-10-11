import { useSocketStore } from '../../store/socketStore';
import { splitList } from '../../utils/arrays';
import AdvertisingCard from './AdvertisingCard';

function Advertising() {
  const advertisingMessages = useSocketStore((state) =>
    state.getAdvertisingMessages(),
  );
  const [first, second] = splitList(advertisingMessages);

  return (
    <section className="h-screen flex flex-col col-start-1 col-end-4 gap-[1%]">
      <AdvertisingCard sx="rounded-br-2xl" messages={first} />
      <AdvertisingCard sx="rounded-tr-2xl" messages={second} />
    </section>
  );
}

export default Advertising;
