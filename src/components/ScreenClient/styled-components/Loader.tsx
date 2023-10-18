import { CircularProgress } from '@mui/material';

export default function Loader() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <CircularProgress style={{ width: '10vw', height: '10vh' }} />
    </div>
  );
}
