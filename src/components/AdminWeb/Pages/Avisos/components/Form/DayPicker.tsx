import * as React from 'react';

export const daysOfTheWeek: Days[] = [
  { id: 1, name: 'Lunes' },
  { id: 2, name: 'Martes' },
  { id: 3, name: 'Miércoles' },
  { id: 4, name: 'Jueves' },
  { id: 5, name: 'Viernes' },
  { id: 6, name: 'Sabado' },
  { id: 0, name: 'Domingo' },
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

  React.useEffect(() => {
    if (selectedDays.length === 7) {
      setSelectAllDays(true);
    } else {
      setSelectAllDays(false);
    }
  }, [handleDayClick]);

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
