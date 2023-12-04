import { CircularProgress } from '@mui/material';

export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <CircularProgress style={{ width: '5vw', height: '5vh' }} />
    </div>
  );
}
