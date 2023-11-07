import { useEffect } from 'react';
import { useScreenFilters } from '../../../store/useScreenFilters';
import { useFilters } from '../../../store/useFilters';

function SelectAllFilter() {
  const [isSelectedAll, setIsSelectedAll] = useFilters((state) => [
    state.isSelectedAll,
    state.setIsSelectedAll,
  ]);
  const selectAllTheScreens = useScreenFilters(
    (state) => state.selectAllTheScreens,
  );
  const deselectAllTheScreens = useScreenFilters(
    (state) => state.deselectAllTheScreens,
  );

  useEffect(() => {
    if (isSelectedAll) {
      selectAllTheScreens();
    } else {
      deselectAllTheScreens();
    }
  }, [isSelectedAll]);

  const handleChange = () => {
    setIsSelectedAll(!isSelectedAll);
  };

  return (
    <label className="flex items-center gap-1 text-xl">
      <input type="checkbox" checked={isSelectedAll} onChange={handleChange} />
      seleccionar todas
    </label>
  );
}

export default SelectAllFilter;
