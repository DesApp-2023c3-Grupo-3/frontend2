import { useConfig } from '../../hooks/useConfig';
import { useCard } from '../../hooks/useCards';
import ScreenSelectedInfo from './components/ScreenSelectedInfo';
import QuantityConfiguration from './components/QuantityConfiguration';
import ListOfCards from './components/ListOfCards';
import ButtonSection from './components/ButtonSection';
import Sectores from '../../../../components/Sectores';
import { useState } from 'react';
import { useScreenFilters } from '../../store/useScreenFilters';

function ScreenConfig({ closeModal }: { closeModal: () => void }) {
  const { config, changeCourseIntervalTime, changeAdvertisingIntervalTime } =
    useConfig();
  const { cards, selectCard, cardSelected, isAnyCardSelected } = useCard();
  const screens = useScreenFilters((state) => state.screens);
  const selectedScreens = screens.filter((screen) => screen.isSelected);
  const [selectedSector, setSelectedSector] = useState([
    selectedScreens[0]?.sector,
  ]);

  const handleSectorChange = (newSelectedSector: any) => {
    setSelectedSector(newSelectedSector);
  };

  return (
    <section className="relative z-50 flex items-center  flex-col md:py-3 gap-2 md:gap-2">
      <div className="flex flex-col items-center md:gap-24 justify-between w-full md:px-10 md:flex-row">
        <ScreenSelectedInfo />
        {selectedScreens.length === 1 && isAnyCardSelected && (
          <div className="md:w-[400px] md:p-0 px-4 w-full">
            <Sectores
              selectedSector={selectedSector}
              onSelectedSectorChange={handleSectorChange}
              hasError={!selectedSector}
              canChooseMany={false}
            />
          </div>
        )}
      </div>

      <ListOfCards cards={cards} onClick={selectCard} />
      <QuantityConfiguration
        config={config}
        isAnySelected={isAnyCardSelected}
        cardSelectedId={cardSelected?.id}
        onChangeAdvertising={changeAdvertisingIntervalTime}
        onChangeCourse={changeCourseIntervalTime}
      />

      <ButtonSection
        selectedSector={selectedSector}
        cardSelected={cardSelected}
        config={config}
        isAnyCardSelected={isAnyCardSelected}
        isAnySectorSelected={selectedSector.length > 0}
        closeModal={closeModal}
      />
    </section>
  );
}

export default ScreenConfig;
