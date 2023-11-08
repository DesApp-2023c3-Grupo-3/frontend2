import { useConnectionSocket } from '../hooks/useConnectionSocket';
import Screen from './Screen';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useScreen } from '../store/useScreen';
import Loader from '../styled-components/Loader';
import { useConnectionMessage } from '../store/useConnectionMessage';
import { useState } from 'react';

function ScreenClient({ screenId }: { screenId: number }) {
  const { socketConnection } = useConnectionSocket(screenId);
  const [isMobile, setIsMobile] = useState(false);
  const setScreenId = useScreen((state) => state.setScreenId);
  const typeScreen = useConnectionMessage((state) => state.connectionMessage);

  useEffect(() => {
    setScreenId(screenId);
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    console.log(isMobile);
  }, [screenId]);

  return (
    <>
      <Helmet>
        <title>Cartelera UNAHUR | Cartelera</title>
      </Helmet>
      {isMobile ? (
        <div className="text-center h-screen w-screen bg-green-700 text-white text-2xl font-bold flex items-center justify-center">
          No se puede acceder a la cartelera desde un celular.
        </div>
      ) : socketConnection && typeScreen.sector.id ? (
        <Screen />
      ) : (
        <Loader />
      )}
      ;
    </>
  );
}

export default ScreenClient;
