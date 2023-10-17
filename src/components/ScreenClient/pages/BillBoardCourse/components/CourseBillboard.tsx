import Advertising from '../../../styled-components/Advertising';
import AdvertisingCard from '../../Advertising/components/AdvertisingCard';
import Courses from './Courses';
import MainBillboard from '../../../styled-components/MainBillboard';
import { useAvalaibleAdvertising } from '../../../hooks/useAvalaibleAdvertising';
import unahur from '../../../assets/unahur.png';

export default function CourseBillboard() {
  const { first, second } = useAvalaibleAdvertising();

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

function DefaultCard({ sx }: { sx: string }) {
  return (
    <section
      className={`${sx} rounded-tr-2xl bg-white w-full flex flex-col items-center justify-center relative h-[49.4vh]`}
    >
      <img src={unahur} className="max-w-[30vh]" alt="" />
    </section>
  );
}
