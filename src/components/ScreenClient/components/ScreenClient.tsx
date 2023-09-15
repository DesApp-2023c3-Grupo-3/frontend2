import Advertising from './Advertising/Advertising';
import Courses from './Course/Courses';

function ScreenClient() {
  return (
    <main className='bg-[#D9D9D9] h-screen grid grid-cols-12'>
      <Advertising />
      <Courses />
    </main>
  );
}

export default ScreenClient;
