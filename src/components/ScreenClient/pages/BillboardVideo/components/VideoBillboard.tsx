import { splitListWithoutVideos } from '../../../utils/arrays';
import Advertising from '../../../styled-components/Advertising';
import AdvertisingCard from '../../Advertising/components/AdvertisingCard';
import Video from './Video';
import MainBillboard from '../../../styled-components/MainBillboard';
import { useAvalaibleAdvertising } from '../../../hooks/useAvalaibleAdvertising';
import DefaultCard from '../../../styled-components/DefaultCard';

export default function VideoWithAdvertisingBillboard() {
  const { first, second } = useAvalaibleAdvertising(splitListWithoutVideos);

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
      <Video />
    </MainBillboard>
  );
}
