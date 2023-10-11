import { CircularProgress } from '@mui/material';
import { useConnectionSocket } from '../hooks/useConnectionSocket';
import CourseBillboard from '../pages/BillBoardCourse/components/CourseBillboard';
import VideoBillboard from '../pages/BillboardVideo/components/VideoBillboard';

const PANTALLA: number = 1;

function ScreenClient({ screenId }: { screenId: number }) {
  const { socketConnection, error } = useConnectionSocket(screenId);

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
