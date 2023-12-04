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
    <section className="relative z-50 flex items-center justify-center flex-col px-10 md:py-2 gap-2 md:gap-2">
      <div className="flex items-center gap-24 justify-between w-full px-10">
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
        selectedSectorId={selectedSector[0].id}
        isAnyCardSelected={isAnyCardSelected}
        cardSelected={cardSelected}
        config={config}
        closeModal={closeModal}
      />
    </section>
  );
}

export default ScreenConfig;
