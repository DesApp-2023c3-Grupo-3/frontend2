import ScreenHeader from './components/ScreenHeader/ScreenHeader';
import ScreenMain from './components/ScreenMain/ScreenMain';

function Pantallas() {
  return (
    <section className="h-screen flex flex-col w-full p-12 overflow-auto scrollbar scrollbar-thumb-[#949494] scrollbar-track-[#cbcbcb]">
      <ScreenHeader />
      <ScreenMain />
    </section>
  );
}

export default Pantallas;
