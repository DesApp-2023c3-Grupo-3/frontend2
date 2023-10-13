import './AdminWeb.sass';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Usuarios from './Pages/Usuarios/Usuarios';
import Comisiones from './Pages/Comisiones/Comisiones';
import Pantallas from './Pages/Pantallas/Pantallas';
import Avisos from './Pages/Avisos/Avisos';

function AdminWeb() {
  return (
    <section className="h-screen flex flex-row">
      <Navbar />
      <Routes>
        <Route path="/advertising" element={<Avisos />} />
        <Route path="/comission" element={<Comisiones />} />
        <Route path="/screen" element={<Pantallas />} />
        <Route path="/user" element={<Usuarios />} />
      </Routes>
    </section>
  );
}

export default AdminWeb;
