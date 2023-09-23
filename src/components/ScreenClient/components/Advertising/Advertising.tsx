import { useSocketStore } from '../../store/socketStore';
import { splitList } from '../../utils/arrays';
import AdvertisingCard from './AdvertisingCard';

function Advertising() {
  const advertisingMessages = useSocketStore((state) =>
    state.getAdvertisingMessages(),
  );
  const [firstHalf, secondHalf] = splitList(advertisingMessages);

  return (
    <section className="h-full flex flex-col col-start-1 col-end-4 gap-[0.9%]">
      <AdvertisingCard sx="rounded-br-2xl" messages={firstHalf} />
      <AdvertisingCard sx="rounded-tr-2xl" messages={secondHalf} />
    </section>
  );
}

export default Advertising;
