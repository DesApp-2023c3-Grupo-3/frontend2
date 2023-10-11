import { CircularProgress } from '@mui/material';
import { useConnectionSocket } from '../hooks/useConnectionSocket';
import Screen from './Screen';

function ScreenClient() {
  const { socketConnection } = useConnectionSocket();

  return socketConnection ? <Screen /> : <CircularProgress />;
}

export default ScreenClient;
