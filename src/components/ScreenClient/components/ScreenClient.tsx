import { useConnectionSocket } from '../hooks/useConnectionSocket';
import Screen from './Screen';
import { useEffect } from 'react';
import { useScreen } from '../store/useScreen';
import Loader from '../styled-components/Loader';
import { useConnectionMessage } from '../store/useConnectionMessage';

function ScreenClient({ screenId }: { screenId: number }) {
  const { socketConnection } = useConnectionSocket(screenId);
  const setScreenId = useScreen((state) => state.setScreenId);
  const typeScreen = useConnectionMessage((state) => state.connectionMessage);

  useEffect(() => {
    setScreenId(screenId);
  }, [screenId]);

  return socketConnection && typeScreen.sector.id ? <Screen /> : <Loader />;
}

export default ScreenClient;
