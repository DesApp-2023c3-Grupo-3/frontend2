import { useConfig } from '../../hooks/useConfig';
import { useCard } from '../../hooks/useCards';
import ScreenSelectedInfo from './components/ScreenSelectedInfo';
import QuantityConfiguration from './components/QuantityConfiguration';
import ListOfCards from './components/ListOfCards';
import ButtonSection from './components/ButtonSection';

function ScreenConfig({ closeModal }: { closeModal: () => void }) {
  const { config, changeCourseIntervalTime, changeAdvertisingIntervalTime } =
    useConfig({
      advertisingIntervalTime: 15,
      courseIntervalTime: 15,
    });

  const { cards, selectCard, cardSelected, isAnyCardSelected } = useCard();

  return (
    <section className="relative z-50 flex items-center justify-center flex-col px-10 md:py-2 gap-2 md:gap-2">
      <ScreenSelectedInfo />
      <ListOfCards cards={cards} onClick={selectCard} />

      <QuantityConfiguration
        config={config}
        isAnySelected={isAnyCardSelected}
        cardSelectedId={cardSelected?.id}
        onChangeAdvertising={changeAdvertisingIntervalTime}
        onChangeCourse={changeCourseIntervalTime}
      />

      <ButtonSection
        isAnyCardSelected={isAnyCardSelected}
        cardSelected={cardSelected}
        config={config}
        closeModal={closeModal}
      />
    </section>
  );
}

export default ScreenConfig;
