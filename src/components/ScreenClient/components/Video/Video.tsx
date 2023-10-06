import { useCarousel } from '../../hooks/useCarousel';
import { useSocketStore } from '../../store/socketStore';
import AdvertisingVideo from '../Advertising/VideoAdvertising';
import Footer from '../Course/Footer';
import Header from '../Course/Header';
import Dots from '../Dots';

export default function Video() {
  const advertisingMessages = useSocketStore((state) =>
    state.getAdvertisingMessages(),
  );
  const advertisingVideos = advertisingMessages.filter(
    (message) => message.advertisingTypeId === 2,
  );

  const { selectedItem, selectedIndex, changeSelectedItem } = useCarousel(
    advertisingVideos,
    0,
  );

  return (
    <section className="h-screen col-start-4 col-end-13 bg-white flex flex-col justify-between">
      <Header />
      <div className="h-full w-full p-2 mx-auto">
        <div className="h-full shadow-[0px_0px_10px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden">
          <div className="w-full h-[8%] bg-[#74B235] text-white text-[3.5vh]">
            <span className="ml-10">Becas Progresar</span>
          </div>
          <div className="h-[92%] w-full p-4">
            <AdvertisingVideo
              payload={selectedItem.payload}
              changeSelectedItem={changeSelectedItem}
              sx="h-full w-full"
            />
          </div>
        </div>
      </div>
      <Dots
        selectedIndex={selectedIndex}
        items={advertisingVideos}
        sx="items-center justify-center"
      />
      <Footer />
    </section>
  );
}
