import { useEffect } from 'react';
import { useScreenFilters } from '../../../store/useScreenFilters';
import { useFilters } from '../../../store/useFilters';

function SelectAllFilter() {
  const [isSelectedAll, setIsSelectedAll] = useFilters((state) => [
    state.isSelectedAll,
    state.setIsSelectedAll,
  ]);
  const [screens, deselectAllTheScreens, selectAllTheScreens] =
    useScreenFilters((state) => [
      state.screens,
      state.deselectAllTheScreens,
      state.selectAllTheScreens,
    ]);

  useEffect(() => {
    setIsSelectedAll(screens.every((screen) => screen.isSelected));
  }, [screens]);

  const handleChange = () => {
    if (isSelectedAll) {
      deselectAllTheScreens();
    } else {
      selectAllTheScreens();
    }
  };

  return (
    <label className="flex items-center gap-1 text-xl">
      <input type="checkbox" checked={isSelectedAll} onChange={handleChange} />
      seleccionar todas
    </label>
  );
}

export default SelectAllFilter;
