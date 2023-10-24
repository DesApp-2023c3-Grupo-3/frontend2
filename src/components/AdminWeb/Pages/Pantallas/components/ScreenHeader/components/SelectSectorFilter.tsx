import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useFilters } from '../../../store/useFilters';
import { useScreenFilters } from '../../../store/useScreenFilters';
import { getSectores } from '../../../utils/getSectores';

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

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSector(event.target.value);
    setIsSelectedAll(false);
    deselectAllTheScreens();
  };

  return (
    <div className="flex items-center gap-2">
      <span className="font-bold text-xl">filtrar por sector</span>
      <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sector}
          label="Sector"
          onChange={handleChange}
          sx={{ fontSize: '1.1rem' }}
        >
          <MenuItem value="Todos">Todos</MenuItem>
          {getSectores(screens).map((screen, index) => (
            <MenuItem key={index} value={screen}>
              {screen}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectSectorFilter;
