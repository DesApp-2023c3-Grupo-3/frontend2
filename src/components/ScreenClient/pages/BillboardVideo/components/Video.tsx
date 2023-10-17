import AdvertisingVideo from '../../Advertising/components/VideoAdvertising';
import Footer from '../../../styled-components/Footer';
import Header from '../../../styled-components/Header';
import BillboardCard from '../../../styled-components/BillboardCard';
import { useAdvertisingMessages } from '../../../store/useAdvertisingMessages';
import DefaultCard from '../../../styled-components/DefaultCard';
import { useCarouselVideo } from '../../../hooks/useCarouselVideo';

export default function Video() {
  const advertisingMessages = useAdvertisingMessages(
    (state) => state.avalaibleAdvertisingMessages,
  );
  const advertisingVideos = advertisingMessages.filter(
    (message) => message.advertisingTypeId === 2,
  );

  return (
    <BillboardCard>
      <Header />
      <article className="h-full w-full p-2 mx-auto">
        <main className="h-full w-full shadow-[0px_0px_10px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden">
          {advertisingVideos.length > 0 ? (
            <AdvertisingVideo
              advertisingVideos={advertisingVideos}
              sx="h-full w-full"
            />
          ) : (
            <DefaultCard sx="h-full" />
          )}
        </main>
      </article>
      <Footer />
    </BillboardCard>
  );
}
