import { useEffect } from 'react';
import { useScreenFilters } from '../../../store/useScreenFilters';
import { useFilters } from '../../../store/useFilters';

function SelectAllFilter() {
  const [isSelectedAll, setIsSelectedAll, sector] = useFilters((state) => [
    state.isSelectedAll,
    state.setIsSelectedAll,
    state.sector,
  ]);
  const [screens, deselectAllTheScreens, selectAllTheScreens] =
    useScreenFilters((state) => [
      state.screens,
      state.deselectAllTheScreens,
      state.selectAllTheScreens,
    ]);

  const filteredScreens = screens.filter(
    (screen) => screen.sectorTitle === sector || sector === 'Todos',
  );

  useEffect(() => {
    setIsSelectedAll(filteredScreens.every((screen) => screen.isSelected));
  }, [screens]);

  const handleChange = () => {
    if (isSelectedAll) {
      deselectAllTheScreens();
    } else {
      selectAllTheScreens(filteredScreens);
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
