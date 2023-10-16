import { useCarousel } from '../../../hooks/useCarousel';
import AdvertisingVideo from '../../Advertising/components/VideoAdvertising';
import Footer from '../../../styled-components/Footer';
import Header from '../../../styled-components/Header';
import BillboardCard from '../../../styled-components/BillboardCard';
import { useAdvertisingMessages } from '../../../store/useAdvertisingMessages';

export default function Video() {
  const advertisingMessages = useAdvertisingMessages(
    (state) => state.advertisingMessages,
  );
  const advertisingVideos = advertisingMessages.filter(
    (message) => message.advertisingTypeId === 2,
  );

  const { selectedItem, changeSelectedItem } = useCarousel(
    advertisingVideos,
    0,
  );

  return (
    <BillboardCard>
      <Header />
      <article className="h-full w-full p-2 mx-auto">
        <main className="h-full w-full shadow-[0px_0px_10px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden">
          <AdvertisingVideo
            payload={selectedItem.payload}
            changeSelectedItem={changeSelectedItem}
            sx="h-full w-full"
          />
        </main>
      </article>
      <Footer />
    </BillboardCard>
  );
}
