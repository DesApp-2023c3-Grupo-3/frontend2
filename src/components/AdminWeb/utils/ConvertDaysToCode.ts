import { Days } from "../Pages/Avisos/components/Modal/DayPicker";

export const convertDaysToNumbers = (selectedDays: Days[]): string[] => {
    return selectedDays.map((day) => day.id.toString());
  };