import { CircularProgress } from '@mui/material';
import { useConnectionSocket } from '../hooks/useConnectionSocket';
import CourseBillboard from '../pages/BillBoardCourse/components/CourseBillboard';
import VideoBillboard from '../pages/BillboardVideo/components/VideoBillboard';

// Para cambiar de tipo de pantalla hay que cambiar este número por ahora esta el tipo 1 y 2
// 1: Pantalla con los cursos, 2: Pantalla con los vídeos
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
