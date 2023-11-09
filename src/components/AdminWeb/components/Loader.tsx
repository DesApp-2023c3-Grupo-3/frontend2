import { CircularProgress, LinearProgress } from '@mui/material';

export interface ILoaderProps {
  type?: number;
  className?: string;
}

export default function Loader({ type = 1, className }: ILoaderProps) {
  return (
    <div className="flex justify-center items-center h-[70%]">
      {type === 1 ? (
        <CircularProgress className={className} />
      ) : (
        <LinearProgress className={className ? className : 'w-[30vw]'} />
      )}
    </div>
  );
}
