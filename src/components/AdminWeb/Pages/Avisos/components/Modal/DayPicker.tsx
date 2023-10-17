import * as React from 'react';

export const daysOfTheWeek: Days[] = [
  { id: 0, name: 'Lunes' },
  { id: 1, name: 'Martes' },
  { id: 2, name: 'Miércoles' },
  { id: 3, name: 'Jueves' },
  { id: 4, name: 'Viernes' },
  { id: 5, name: 'Sabado' },
  { id: 6, name: 'Domingo' },
];
interface DayPickerProps {
  selectedDays: Days[];
  onSelectedDaysChange: React.Dispatch<React.SetStateAction<Days[]>>;
}

function DayPicker({ onSelectedDaysChange, selectedDays }: DayPickerProps) {
  const [selectAllDays, setSelectAllDays] = React.useState(false);

  const handleSelectAllDaysChange = () => {
    const newSelectedDays = selectAllDays ? [] : daysOfTheWeek;
    onSelectedDaysChange(newSelectedDays);
    if (selectAllDays) {
      setSelectAllDays(false);
    } else {
      setSelectAllDays(true);
    }
  };

  const handleDayClick = (day: Days) => {
    let newSelectedDays = selectedDays.filter((d) => d !== day);

    newSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];

    onSelectedDaysChange(newSelectedDays);
  };

  return (
    <div className="flex-row">
      <div className="flex justify-center">
        {daysOfTheWeek.map((day) => (
          <div key={day.id}>
            <button
              onClick={(e) => {
                handleDayClick(day);
                e.preventDefault();
              }}
              className={`rounded-full w-[41px] h-[41px] flex justify-center items-center font-[400] text-black text-[24px] m-1 cursor-pointer ${
                selectedDays.includes(day)
                  ? 'bg-[#2C9CBF] text-white'
                  : 'bg-[#D9D9D9] text-black'
              }`}
            >
              {day.name.slice(0, 2)}
            </button>
          </div>
        ))}
      </div>
      <label className="flex justify-center pt-3">
        <input
          className="mr-3 select-none"
          type="checkbox"
          checked={!!selectAllDays}
          onChange={handleSelectAllDaysChange}
        />
        <span className="select-none">Seleccionar todos los días</span>
      </label>
    </div>
  );
}

export default DayPicker;

export interface Days {
  id: number;
  name: string;
}
