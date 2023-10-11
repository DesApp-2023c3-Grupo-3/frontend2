import { useState } from 'react';

interface DayPickerProps {
  selectedDays: string[];
  onSelectedDaysChange: (newSelectedDays: string[]) => void;
}

function DayPicker({ onSelectedDaysChange, selectedDays }: DayPickerProps) {
  const daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];

  const [selectAllDays, setSelectAllDays] = useState(false);

  const handleSelectAllDaysChange = () => {
    setSelectAllDays(!selectAllDays);
    const newSelectedDays = selectAllDays ? [] : daysOfTheWeek;
    onSelectedDaysChange(newSelectedDays);
  };

  const handleDayClick = (day: string) => {
    let newSelectedDays;

    if (selectAllDays) {
      newSelectedDays = selectedDays.filter((d) => d !== day);
    } else {
      newSelectedDays = selectedDays.includes(day)
        ? selectedDays.filter((d) => d !== day)
        : [...selectedDays, day];
    }

    onSelectedDaysChange(newSelectedDays);
  };

  return (
    <div className="flex-row">
      <div className="flex justify-center mt-10">
        {daysOfTheWeek.map((day, index) => (
          <div key={index}>
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
              {day.slice(0, 2)}
            </button>
          </div>
        ))}
      </div>
      <label className="flex justify-center mb-10 mt-3">
        <input
          className="mr-3 select-none"
          type="checkbox"
          checked={selectAllDays}
          onChange={handleSelectAllDaysChange}
        />
        <span className="select-none">Seleccionar todos los días</span>
      </label>
    </div>
  );
}

export default DayPicker;
