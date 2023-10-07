import { useCarousel } from '../../hooks/useCarousel';
import { useSocketStore } from '../../store/socketStore';
import AdvertisingVideo from '../Advertising/VideoAdvertising';
import Footer from '../Course/Footer';
import Header from '../Course/Header';

export default function Video() {
  const advertisingMessages = useSocketStore((state) =>
    state.getAdvertisingMessages(),
  );
  const advertisingVideos = advertisingMessages.filter(
    (message) => message.advertisingTypeId === 2,
  );

  const { selectedItem, changeSelectedItem } = useCarousel(
    advertisingVideos,
    0,
  );

  return (
    <section className="h-screen col-start-7 col-end-21 bg-white flex flex-col justify-between">
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
    </section>
  );
}
