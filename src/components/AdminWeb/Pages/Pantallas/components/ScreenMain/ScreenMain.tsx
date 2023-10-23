import ScreenCard from './components/ScreenCard';
import { useFilters } from './store/useFilters';
import { useScreens } from './store/useScreens';

function ScreenMain() {
  const screens = useScreens((state) => state.screens);
  const sector = useFilters((state) => state.sector);

  const filteredScreens = screens.filter(
    (screen) => screen.sectorTitle === sector || sector === 'Todos',
  );

  return (
    <main className="h-full">
      <section className="h-full grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] gap-4">
        {filteredScreens.map((screen, index) => (
          <ScreenCard
            key={index}
            id={screen.id}
            screenTitle={screen.screenTitle}
            sectorTitle={screen.sectorTitle}
            typeScreen={screen.typeScreen}
            isSelected={screen.isSelected}
          />
        ))}
      </section>
    </main>
  );
}

export default ScreenMain;
