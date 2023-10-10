import { CircularProgress } from '@mui/material';
import { useConnectionSocket } from '../hooks/useConnectionSocket';
import CourseBillboard from '../pages/BillBoardCourse/components/CourseBillboard';
import VideoBillboard from '../pages/BillboardVideo/VideoBillboard';

const PANTALLA: number = 1;

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
