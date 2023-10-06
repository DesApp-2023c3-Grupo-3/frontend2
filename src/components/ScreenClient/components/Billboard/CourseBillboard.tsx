import { useSocketStore } from '../../store/socketStore';
import { splitList } from '../../utils/arrays';
import Advertising from '../Advertising/Advertising';
import AdvertisingCard from '../Advertising/AdvertisingCard';
import Courses from '../Course/Courses';

export default function CourseBillboard() {
  const advertisingMessages = useSocketStore((state) =>
    state.getAdvertisingMessages(),
  );
  const [first, second] = splitList(advertisingMessages);

  return (
    <main className="bg-[#D9D9D9] h-screen grid grid-cols-12 gap-[1vh]">
      <Advertising>
        <AdvertisingCard sx="rounded-br-2xl" messages={first} />
        <AdvertisingCard sx="rounded-tr-2xl" messages={second} />
      </Advertising>
      <Courses />
    </main>
  );
}
