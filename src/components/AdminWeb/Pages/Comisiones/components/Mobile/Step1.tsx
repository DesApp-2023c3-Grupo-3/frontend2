import * as React from 'react';
import Sectores from '../../../../components/Sectores';
import DatePickerDays from '../../../../components/DatePickerDays';
import ErrorMessage from '../../../../components/ErrorMessage';
import {
  validateDates,
  validateTwoDates,
  validationDate,
} from '../../../../utils/validationDate';

interface Step1Props {
  selectedSector: any[];
  setSelectedSector: (e: any[]) => void;
  startDate: any;
  endDate: any;
  setStartDate: (e: any) => void;
  setEndDate: (e: any) => void;
  emptyFields: any;
}

export function Step1({
  selectedSector,
  setSelectedSector,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  emptyFields,
}: Step1Props) {
  const handleSelectedSectorChange = (e: Sector[]) => {
    setSelectedSector(e);
  };
  const invalidDate = () => {
    return validationDate(startDate, endDate);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100%] w-full">
      <div className="w-full px-3">
        <span className="md:hidden block text-center text-xl font-semibold mb-2">
          Sector
        </span>
        <Sectores
          selectedSector={selectedSector}
          onSelectedSectorChange={handleSelectedSectorChange}
          hasError={selectedSector.length === 0 && emptyFields.selectedSector}
          canChooseMany={false}
        />
        {ErrorMessage(
          'Falta seleccionar los sectores.',
          selectedSector.length === 0 && emptyFields.selectedSector,
        )}
      </div>
      <div className="w-full">
        <DatePickerDays
          hasError={
            (emptyFields.date && invalidDate()) ||
            (validateTwoDates(startDate, endDate) && !emptyFields.date)
          }
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
          selectedDateInit={startDate}
          selectedDateFinal={endDate}
          isCreate={true}
        />
        {ErrorMessage(
          validateDates(startDate, endDate)
            ? 'Fecha inválida'
            : 'Falta seleccionar las fechas.',
          invalidDate() && emptyFields.date,
        )}
        {ErrorMessage(
          'La fecha inicio es más grande que la fecha fin',
          validateTwoDates(startDate, endDate) && !emptyFields.date,
        )}
      </div>
    </div>
  );
}
