import '../styles/styles.sass';
import Navbar from '../components/Navbar';
import MainAvisos from '../components/MainAvisos/MainAvisos';

function Avisos() {
  return (
    <>
      <div className="page-container flex columns-1">
        <Navbar />
        <MainAvisos />
      </div>
    </>
  );
}

export default Avisos;
