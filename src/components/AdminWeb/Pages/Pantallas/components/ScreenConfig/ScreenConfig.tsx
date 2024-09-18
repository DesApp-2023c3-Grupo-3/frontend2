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
      <div className="flex flex-col items-center md:gap-24 justify-between w-full md:px-14 md:flex-row">
        <ScreenSelectedInfo />
        {selectedScreens.length === 1 && (
          <Sectores
            selectedSector={selectedSector}
            onSelectedSectorChange={handleSectorChange}
            hasError={false}
            canChooseMany={false}
          />
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
        isAnyCardSelected={isAnyCardSelected}
        cardSelected={cardSelected}
        config={config}
        closeModal={closeModal}
      />
    </section>
  );
}

export default ScreenConfig;
