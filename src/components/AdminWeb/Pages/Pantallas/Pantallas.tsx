import ScreenHeader from './components/ScreenHeader/ScreenHeader';
import ScreenMain from './components/ScreenMain/ScreenMain';

function Pantallas() {
  return (
    <section className="flex flex-col w-full pl-12 pr-12 pt-[12px] overflow-auto scrollbar scrollbar-thumb-[#949494] scrollbar-track-[#cbcbcb]">
      <ScreenHeader />
      <ScreenMain />
    </section>
  );
}

export default Pantallas;
