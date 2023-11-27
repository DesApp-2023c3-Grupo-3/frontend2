import useFetchScreens from '../../hooks/useFetchScreens';
import { useFilters } from '../../store/useFilters';
import ScreenCard from './components/ScreenCard';

function ScreenMain() {
  const { screens } = useFetchScreens();
  const sector = useFilters((state) => state.sector);

  const filteredScreens = screens.filter(
    (screen) => screen.sectorTitle === sector || sector === 'Todos',
  );

  const ordScreensById = filteredScreens.sort(
    (screen1, screen2) => screen1.id - screen2.id,
  );

  return (
    <main className="relative h-full">
      <section className="flex justify-center flex-wrap gap-4">
        {filteredScreens.length > 0 ? (
          ordScreensById.map((screen) => (
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
