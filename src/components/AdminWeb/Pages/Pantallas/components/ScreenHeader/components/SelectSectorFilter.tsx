import { useFilters } from '../../../store/useFilters';
import { useScreenFilters } from '../../../store/useScreenFilters';
import { getSectores } from '../../../utils/getSectores';
import { Select, SelectItem } from '@nextui-org/react';

function SelectSectorFilter() {
  const [sector, setSector, setIsSelectedAll] = useFilters((state) => [
    state.sector,
    state.setSector,
    state.setIsSelectedAll,
  ]);
  const [deselectAllTheScreens, screens] = useScreenFilters((state) => [
    state.deselectAllTheScreens,
    state.screens,
  ]);

  const handleChange = (event: string) => {
    setSector(sectores[parseInt(event)]);
    setIsSelectedAll(false);
    deselectAllTheScreens();
  };

  const sectores = getSectores(screens);
  sectores.unshift('Todos');

  return (
    <div className="flex items-center gap-2">
      <span className="font-bold text-xl">filtrar por sector</span>
      <Select
        aria-label="Select"
        selectionMode="single"
        className="w-[250px]"
        variant="underlined"
        value={sector}
        onChange={(e) => handleChange(e.target.value)}
        defaultSelectedKeys={'0'}
      >
        {sectores.map((screen, index) => (
          <SelectItem key={index} value={screen}>
            {screen}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectSectorFilter;
