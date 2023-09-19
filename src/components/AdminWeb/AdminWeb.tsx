import './AdminWeb.sass';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Avisos from './Avisos/Avisos';
import Usuarios from './Usuarios/Usuarios';
import Comisiones from './Comisiones/Comisiones';

function AdminWeb() {
  return (
    <section className="h-screen flex flex-row">
      <Navbar />
      <Routes>
        <Route path="/avisos" element={<Avisos />} />
        <Route path="/comisiones" element={<Comisiones />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </section>
  );
}

export default AdminWeb;
