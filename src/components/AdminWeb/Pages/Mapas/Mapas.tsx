import { Helmet } from 'react-helmet';
import MapHeader from './components/MapHeader/MapHeader';
import MapMain from './components/MapMain/MapMain';

function Mapas() {
  return (
    <>
      <Helmet>
        <title>Administrador de cartelera | Mapas</title>
      </Helmet>
      <section className="flex flex-col w-full pl-12 pr-12 pt-[12px] overflow-auto scrollbar scrollbar-thumb-[#949494] scrollbar-track-[#cbcbcb]">
        <MapHeader />
        <MapMain />
      </section>
    </>
  );
}

export default Mapas;
