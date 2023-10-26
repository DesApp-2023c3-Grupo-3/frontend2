import { CircularProgress } from '@mui/material';
import { useConnectionSocket } from '../hooks/useConnectionSocket';
import Screen from './Screen';
import { Helmet } from 'react-helmet';

function ScreenClient({ screenId }: { screenId: number }) {
  const { socketConnection } = useConnectionSocket(screenId);

  return (
    <>
      <Helmet>
        <title>Cartelera UNAHUR | Cartelera</title>
      </Helmet>

      {socketConnection ? <Screen /> : <CircularProgress />}
    </>
    );
}

export default ScreenClient;
