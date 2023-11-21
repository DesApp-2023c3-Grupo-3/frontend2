import CardModal from './components/CardModal';
import QuantityInput from './components/QuantityInput';
import ButtonDisabled from '../Button/ButtonDisabled';
import { useConfig } from '../../hooks/useConfig';
import { useCard } from '../../hooks/useCards';
import Swal from 'sweetalert2';
import { useScreenFilters } from '../../store/useScreenFilters';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
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

  const handleClick = () => {
    deselectAllTheScreens();
    closeModal();
    Toast.fire({
      icon: 'success',
      title: 'Se aplico correctamente',
    });
  };

  return (
    <section className="z-50 flex items-center justify-center flex-col px-10 py-5 gap-4">
      <div className="flex gap-10">
        {cards.map((card, index) => {
          return <CardModal key={index} onClick={selectCard} card={card} />;
        })}
      </div>

      <div className="flex gap-24">
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
        styleActive="rounded-lg flex items-center justify-center text-2xl w-[300px] h-[40px] font-[600] text-[20px] text-white bg-[#2C9CBF] hover:bg-[#2c9dbfc5]"
        styleDesactive="rounded-lg flex items-center justify-center text-2xl w-[300px] border-solid border-2 bg-[#ffffff] h-[40px] font-[600] text-[20px] text-blue-300 border-blue-200"
      />
    </section>
  );
}

export default ScreenConfig;
