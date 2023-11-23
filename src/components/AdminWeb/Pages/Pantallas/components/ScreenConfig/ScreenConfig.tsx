import CardModal from './components/CardModal';
import QuantityInput from './components/QuantityInput';
import ButtonDisabled from '../Button/ButtonDisabled';
import { useConfig } from '../../hooks/useConfig';
import { useCard } from '../../hooks/useCards';
import Swal from 'sweetalert2';
import { useScreenFilters } from '../../store/useScreenFilters';
import { screenAPI } from '../../../../../../services/screens';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const messageError = (error: string) =>
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: error,
    confirmButtonColor: '#2C9CBF',
  });

function ScreenConfig({ closeModal }: { closeModal: () => void }) {
  const { config, changeCourseIntervalTime, changeAdvertisingIntervalTime } =
    useConfig({
      advertisingIntervalTime: 15,
      courseIntervalTime: 15,
    });
  const deselectAllTheScreens = useScreenFilters(
    (state) => state.deselectAllTheScreens,
  );
  const { cards, selectCard, cardSelected, isAnyCardSelected } = useCard();
  const screens = useScreenFilters((state) => state.screens);

  const updateScreens = () => {
    const selectedScreens = screens.filter((screen) => screen.isSelected);

    selectedScreens.forEach((screen) => {
      screen.typeScreen = String(cardSelected?.id);
    });

    const mappedScreens = selectedScreens.map((screen) => {
      const { id, typeScreen, subscription, sector } = screen;

      return {
        id,
        templeteId: typeScreen,
        subscription,
        courseIntervalTime: config.courseIntervalTime,
        advertisingIntervalTime: config.advertisingIntervalTime,
        sector,
      };
    });

    return screenAPI.edit(mappedScreens);
  };

  const handleClick = () => {
    updateScreens()
      .then(() => {
        Toast.fire({
          icon: 'success',
          title: 'Se aplico correctamente',
        });
      })
      .then(() => {
        deselectAllTheScreens();
        closeModal();
      })
      .catch((error) => messageError(error.message));
  };

  return (
    <section className="z-50 flex items-center justify-center flex-col px-10 md:py-5 gap-2 md:gap-4">
      <div className="flex flex-col gap-2 md:gap-10 md:flex-row">
        {cards.map((card, index) => (
          <CardModal key={index} onClick={selectCard} card={card} />
        ))}
      </div>

      <div className="flex flex-col md:gap-24 md:flex-row">
        {isAnyCardSelected && (
          <>
            {cardSelected?.id !== 3 && (
              <QuantityInput
                title="Velocidad de los avisos"
                onChange={changeAdvertisingIntervalTime}
              />
            )}
            {cardSelected?.id === 1 && (
              <QuantityInput
                title="Velocidad de las comisiones"
                onChange={changeCourseIntervalTime}
              />
            )}
          </>
        )}
      </div>

      <ButtonDisabled
        action={handleClick}
        label="APLICAR"
        condition={isAnyCardSelected}
        styleActive="rounded-lg flex items-center justify-center text-xl md:text-2xl w-[300px] h-[40px] font-[600] text-white bg-[#2C9CBF] hover:bg-[#2c9dbfc5]"
        styleDesactive="rounded-lg flex items-center justify-center text-xl md:text-2xl w-[300px] border-solid border-2 bg-[#ffffff] h-[40px] font-[600] text-blue-300 border-blue-200"
      />
    </section>
  );
}

export default ScreenConfig;
