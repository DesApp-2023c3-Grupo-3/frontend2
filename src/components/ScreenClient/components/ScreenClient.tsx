import { useConnectionSocket } from '../hooks/useConnectionSocket';
import Advertising from './Advertising/Advertising';
import Courses from './Course/Courses';

<<<<<<< HEAD
function ScreenClient({screenId}: {screenId: number}) {
=======
function ScreenClient({ screenId }: { screenId: number }) {
>>>>>>> bf0eaf89fe6b36e069738dd71e654d7d788b4230
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
