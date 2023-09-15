import Informacion from './Informacion';
import Comisiones from './Comisiones';

function ScreenClient() {
  return (
    <main className='bg-[#D9D9D9] h-screen grid grid-cols-12'>
      <Informacion />
      <Comisiones />
    </main>
  );
}

export default ScreenClient;
