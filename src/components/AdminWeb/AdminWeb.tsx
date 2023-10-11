import './AdminWeb.sass';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Avisos from './advertisings/Avisos';
//import Usuarios from './Usuarios/Usuarios';
import Comisiones from './commissions/Commissions';
//import Pantallas from './Pantallas/Pantallas';

function AdminWeb() {
  return (
    <section className="flex flex-row h-screen w-100">
      <Navbar />
      <Routes>
        <Route path="/advertising" element={<Avisos />} />
        <Route path="/comission" element={<Comisiones />} />
        {/*<Route path="/screen" element={<Pantallas />} />
        <Route path="/user" element={<Usuarios />} />*/}
      </Routes>
    </section>
  );
}

export default AdminWeb;
