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
      <section className="grid justify-items-center grid-cols-[repeat(auto-fit,_minmax(192px,_1fr))] gap-y-4">
        {filteredScreens.map((screen, index) => (
          <ScreenCard
            key={screen.id}
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
