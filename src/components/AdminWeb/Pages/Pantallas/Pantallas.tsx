import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

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
        <form className="gap-10 flex justify-between items-center text-[1.3rem]">
          <FormControlLabel control={<Checkbox />} label="seleccionar todas" />
          <div className="flex items-center gap-3">
            <span className="font-bold">filtrar por sector</span>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={sector}
                label="Sector"
                onChange={handleChange}
                sx={{ fontSize: 19 }}
              >
                <MenuItem value="Todos">Todos</MenuItem>
                <MenuItem value="Malvinas Argentinas">
                  Malvinas Argentinas
                </MenuItem>
                <MenuItem value="Sector 3">Sector 3</MenuItem>
              </Select>
            </FormControl>
          </div>
          <button className="text-[1.1rem] bg-[#2C9CBF] py-2 px-5 text-white rounded-xl">
            CONFIGURAR
          </button>
        </form>
      </header>
    </section>
  );
}

export default Pantallas;
