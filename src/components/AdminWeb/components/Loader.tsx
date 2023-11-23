import { CircularProgress, LinearProgress } from '@mui/material';

export interface ILoaderProps {
  type?: number;
  className?: string;
  color?: any;
}

export default function Loader({
  type = 1,
  className,
  color = 'primary',
}: ILoaderProps) {
  return (
    <div className="flex justify-center items-center h-[70%]">
      {type === 1 ? (
        <CircularProgress className={className} color={color} />
      ) : (
        <LinearProgress
          color={color}
          className={className ? className : 'w-[30vw]'}
        />
      )}
    </div>
  );
}
