import Advertising from '../../../styled-components/Advertising';
import AdvertisingCard from '../../Advertising/components/AdvertisingCard';
import Courses from './Courses';
import MainBillboard from '../../../styled-components/MainBillboard';
import { useAvalaibleAdvertising } from '../../../hooks/useAvalaibleAdvertising';
import { splitList } from '../../../utils/arrays';
import DefaultCard from '../../../styled-components/DefaultCard';

export default function CourseBillboard() {
  const { first, second } = useAvalaibleAdvertising(splitList);

  return (
    <MainBillboard>
      <Advertising>
        {first.length > 0 ? (
          <AdvertisingCard sx="rounded-br-2xl" messages={first} />
        ) : (
          <DefaultCard sx="rounded-br-2xl" />
        )}
        {second.length > 0 ? (
          <AdvertisingCard sx="rounded-tr-2xl" messages={second} />
        ) : (
          <DefaultCard sx="rounded-tr-2xl" />
        )}
      </Advertising>
      <Courses />
    </MainBillboard>
  );
}
