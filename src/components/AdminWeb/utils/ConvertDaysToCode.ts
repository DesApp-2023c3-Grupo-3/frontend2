import { Days, daysOfTheWeek } from "../Pages/Avisos/components/Form/DayPicker";

const dayCodesToNumbers : any = {
  DO: 0,
  LU: 1,
  MA: 2,
  MI: 3,
  JU: 4,
  VI: 5,
  SA: 6
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