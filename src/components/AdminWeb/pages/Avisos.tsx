import '../styles/styles.sass';
import Navbar from '../components/Navbar';
import MainAdvertising from '../components/MainAvisos/MainAdvertising';

function Avisos() {
  return (
    <>
      <div className="page-container flex columns-1">
        <Navbar />
        <MainAdvertising />
      </div>
    </>
  );
}

export default Avisos;
