import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import Button from '../../components/Buttons/Button';

function Pantallas() {
  const [sector, setSector] = useState('Todos');

  const handleChange = (event: SelectChangeEvent) => {
    setSector(event.target.value);
  };

  return (
    <section className="h-screen flex flex-col w-full p-12">
      <header className="flex justify-between items-center w-full">
        <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px]">
          Pantallas
        </h1>
        <form className="flex justify-between items-center w-[60%]">
          <label className="flex items-center gap-1 text-xl">
            <input type="checkbox" />
            seleccionar todas
          </label>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">filtrar por sector</span>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={sector}
                label="Sector"
                onChange={handleChange}
              >
                <MenuItem value="Todos">Todos</MenuItem>
                <MenuItem value="Malvinas Argentinas">
                  Malvinas Argentinas
                </MenuItem>
                <MenuItem value="Sector 3">Sector 3</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            onClick={() => {}}
            className="rounded-lg flex items-center justify-center text-2xl w-[26%]"
            label="CONFIGURAR"
            active={true}
            type={1}
          />
        </form>
      </header>
    </section>
  );
}

export default Pantallas;
