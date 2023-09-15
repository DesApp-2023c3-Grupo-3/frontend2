import Informacion from './Informacion';
import Comisiones from './Comisiones';
import { useWebSocket } from '../hooks/useWebSocket';


function ScreenClient() {
  useWebSocket()

  return (
    <main className='bg-[#D9D9D9] h-screen grid grid-cols-12'>
      <Informacion />
      <Comisiones />
    </main>
  );
}

export default ScreenClient;
