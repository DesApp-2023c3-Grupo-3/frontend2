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

  const handleDayClick = (day: string) => {
    const newSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];

    onSelectedDaysChange(newSelectedDays);
  };

  return (
    <div className="flex justify-center m-10">
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
  );
}

export default DayPicker;
