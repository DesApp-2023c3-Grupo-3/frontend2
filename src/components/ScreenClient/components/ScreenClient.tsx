import { useConnectionSocket } from '../hooks/useConnectionSocket';
import Advertising from './Advertising/Advertising';
import Courses from './Course/Courses';

function ScreenClient({ screenId }: { screenId: number }) {
  const { socketConnection, error } = useConnectionSocket(screenId);

  console.log(socketConnection?.url, error);

  return (
    <main className="bg-[#D9D9D9] h-screen grid grid-cols-12 gap-[1vh]">
      <Advertising />
      <Courses />
    </main>
  );
}

export default ScreenClient;
