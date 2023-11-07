import { useFilters } from '../../store/useFilters';
import { useScreenFilters } from '../../store/useScreenFilters';
import ScreenCard from './components/ScreenCard';

function ScreenMain() {
  const screens = useScreenFilters((state) => state.screens);
  const sector = useFilters((state) => state.sector);

  const filteredScreens = screens.filter(
    (screen) => screen.sectorTitle === sector || sector === 'Todos',
  );

  return (
    <main className="h-full">
      <section className="flex justify-center flex-wrap gap-4">
        {filteredScreens.length > 0 ? (
          filteredScreens.map((screen, index) => (
            <ScreenCard
              key={screen.id}
              id={screen.id}
              screenTitle={screen.screenTitle}
              sectorTitle={screen.sectorTitle}
              typeScreen={parseInt(screen.typeScreen)}
              isSelected={screen.isSelected}
            />
          ))
        ) : (
          <p className="font-semibold text-3xl">
            No hay pantallas para mostrar
          </p>
        )}
      </section>
    </main>
  );
}

export default ScreenMain;
