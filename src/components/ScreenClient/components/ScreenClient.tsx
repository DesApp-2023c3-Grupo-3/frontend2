import { CircularProgress } from '@mui/material';
import { useConnectionSocket } from '../hooks/useConnectionSocket';
import CourseBillboard from './Billboard/CourseBillboard';
import VideoBillboard from './Billboard/VideoBillboard';

const PANTALLA: number = 2;

function ScreenClient() {
  const { socketConnection } = useConnectionSocket();

  return socketConnection ? (
    PANTALLA === 1 ? (
      <CourseBillboard />
    ) : (
      <VideoBillboard />
    )
  ) : (
    <CircularProgress />
  );
}

export default ScreenClient;
