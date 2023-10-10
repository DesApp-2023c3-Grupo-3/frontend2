import { useSocketStore } from '../../../store/socketStore';
import { splitList } from '../../../utils/arrays';
import Advertising from '../../../styled-components/Advertising';
import AdvertisingCard from '../../Advertising/AdvertisingCard';
import Courses from './Courses';
import MainBillboard from '../../../styled-components/MainBillboard';

export default function CourseBillboard() {
  const advertisingMessages = useSocketStore((state) =>
    state.getAdvertisingMessages(),
  );
  const [first, second] = splitList(advertisingMessages);

  return (
    <MainBillboard>
      <Advertising>
        <AdvertisingCard sx="rounded-br-2xl" messages={first} />
        <AdvertisingCard sx="rounded-tr-2xl" messages={second} />
      </Advertising>
      <Courses />
    </MainBillboard>
  );
}
