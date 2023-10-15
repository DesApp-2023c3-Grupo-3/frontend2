import { CircularProgress } from '@mui/material';
import { useConnectionSocket } from '../hooks/useConnectionSocket';
import Screen from './Screen';
import { useEffect } from 'react';
import { useScreenId } from '../store/useScreenId';

function ScreenClient({ screenId }: { screenId: number }) {
  const { socketConnection } = useConnectionSocket(screenId);
  const setScreenId = useScreenId((state) => state.setScreenId);

  useEffect(() => {
    setScreenId(screenId);
  }, []);

  return socketConnection ? <Screen /> : <CircularProgress />;
}

export default ScreenClient;
