import { useConnectionSocket } from '../hooks/useConnectionSocket';
import Screen from './Screen';
import { useEffect } from 'react';
import { useScreen } from '../store/useScreen';
import Loader from '../styled-components/Loader';

function ScreenClient({ screenId }: { screenId: number }) {
  const { socketConnection } = useConnectionSocket(screenId);
  const setScreenId = useScreen((state) => state.setScreenId);

  useEffect(() => {
    setScreenId(screenId);
  }, [screenId]);

  return socketConnection ? <Screen /> : <Loader />;
}

export default ScreenClient;
