import { CircularProgress } from '@mui/material';
import { useConnectionSocket } from '../hooks/useConnectionSocket';
import Screen from './Screen';

function ScreenClient({ screenId }: { screenId: number }) {
  const { socketConnection, error } = useConnectionSocket(screenId);

  return socketConnection ? <Screen /> : <CircularProgress />;
}

export default ScreenClient;
