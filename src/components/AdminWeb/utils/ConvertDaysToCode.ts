import { Days, daysOfTheWeek } from "../Pages/Avisos/components/Modal/DayPicker";

const dayCodesToNumbers : any = {
  LU: 0,
  MA: 1,
  MI: 2,
  JU: 3,
  VI: 4,
  SA: 5,
  DO: 6
};

export const convertDaysToNumbers = (selectedDays: Days[]): string[] => {
    return selectedDays.map((day) => day.id.toString());
  };

  export const convertCodesToDays = (codes: string[]): Days[] => {
    return codes.map((code) => {
      const codeUpperCase = code.toUpperCase();
      const codeNumber = dayCodesToNumbers[codeUpperCase];
      if (codeNumber !== undefined) {
        const day = daysOfTheWeek.find((d) => d.id === codeNumber);
        return day || { id: codeNumber, name: 'Código incorrecto' };
      } else {
        return { id: -1, name: 'Código no válido' };
      }
    });
  };