import { useAdvertisingMessages } from '../../store/useAdvertisingMessages';
import DefaultCard from '../../styled-components/DefaultCard';
import Header from '../../styled-components/Header';
import AdvertisingVideo from '../Advertising/components/VideoAdvertising';
import { useEffect } from 'react';

function OnlyVideoBillboard() {
  const [advertisingMessages, addAvalaibleAdvertisingMessages] =
    useAdvertisingMessages((state) => [
      state.avalaibleAdvertisingMessages,
      state.addAvalaibleAdvertisingMessage,
    ]);
  const advertisingVideos = advertisingMessages.filter(
    (message) => message.advertisingTypeId === 2,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      addAvalaibleAdvertisingMessages();
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header sx="absolute top-0 w-full" />
      <article className="w-full mx-auto h-screen">
        <main className="h-full w-full">
          {advertisingVideos.length > 0 ? (
            <AdvertisingVideo
              advertisingVideos={advertisingVideos}
              sx="h-full w-full"
              withDots={false}
            />
          ) : (
            <DefaultCard sx="h-full" />
          )}
        </main>
      </article>
    </>
  );
}

export default OnlyVideoBillboard;
