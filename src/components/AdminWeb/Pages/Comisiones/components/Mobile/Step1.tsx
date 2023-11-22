import * as React from 'react';
import Sectores from '../../../../components/Sectores';
import DatePickerDays from '../../../../components/DatePickerDays';

interface Step1Props {
  selectedSector: any[];
  setSelectedSector: (e: any[]) => void;
  startDate: any;
  endDate: any;
  setStartDate: (e: any) => void;
  setEndDate: (e: any) => void;
}

export function Step1({
  selectedSector,
  setSelectedSector,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: Step1Props) {
  const handleSelectedSectorChange = (e: Sector[]) => {
    setSelectedSector(e);
  };

  return (
    <div className="flex justify-center items-center h-[100%]">
      <div className="flex flex-col justify-around flex-nowrap items-stretch content-normal">
        <div className="block shrink-1 grow-0 basis-auto self-center order-0 mb-10">
          <Sectores
            selectedSector={selectedSector}
            onSelectedSectorChange={handleSelectedSectorChange}
            hasError={false}
            canChooseMany={false}
          />
        </div>
        <div className="block shrink-1 grow-0 basis-auto self-center order-0 mt-10">
          <DatePickerDays
            onChangeStartDate={setStartDate}
            onChangeEndDate={setEndDate}
            selectedDateInit={startDate}
            selectedDateFinal={endDate}
            isCreate={true}
          />
        </div>
      </div>
    </div>
  );
}
