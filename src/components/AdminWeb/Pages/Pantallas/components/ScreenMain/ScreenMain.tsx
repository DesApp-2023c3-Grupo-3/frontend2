import ScreenCard from './components/ScreenCard';

const screens = [
  {
    screenTitle: 'Pantalla 1',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 2',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 3',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 4',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
  {
    screenTitle: 'Pantalla 5',
    sectorTitle: 'Malvinas Argentinas',
    typeScreen: 1,
  },
];

function ScreenMain() {
  return (
    <main className="h-full">
      <section className="h-full grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] gap-4">
        {screens.map((screen, index) => (
          <ScreenCard
            key={index}
            screenTitle={screen.screenTitle}
            sectorTitle={screen.sectorTitle}
            typeScreen={screen.typeScreen}
          />
        ))}
      </section>
    </main>
  );
}

export default ScreenMain;
