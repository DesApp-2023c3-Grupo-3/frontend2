import Button from '../../../../components/Buttons/Button';
import DatePickerDays from './DatePickerDays';
import Sectores from './Sectores';
import React, { useState } from 'react';
import { Commission } from '../../../../types/customTypes';
import { abbreviateSectorName } from '../../../../utils/AbbreviateSectorName';
import { asCommissions } from '../../../../../../services/commissions';

interface FormCommissionProps {
  commissionsJSON: Commission[];
  setCommissionsJSON: React.Dispatch<React.SetStateAction<Commission[]>>;
  closeModal: () => void;
}

function FormCommission({
  commissionsJSON,
  setCommissionsJSON,
  closeModal,
}: FormCommissionProps) {
  const [hasDocument, setHasDocument] = useState<boolean>(false);
  const [tableData, setTableData] = useState<Commission[]>([]);
  const [excellData, setExcellData] = useState<any>()
  const [selectedFileName, setSelectedFileName] = useState("");
  const newCommission = () => {
    setHasDocument(!hasDocument);

    const startDay = startDate.toLocaleDateString();
    const endtDay = endDate.toLocaleDateString();
    const sectores = selectedSector
      .map((sector) => abbreviateSectorName(sector.name))
      .join(', ');

    const newCommission = {
      id: commissionsJSON.length + 1,
      name: 'C1',
      user: {
        id: commissionsJSON.length + 1,
        name: 'Juan',
        dni: '1234',
        password: 'contra',
        role: {
          id: commissionsJSON.length + 1,
          name: 'Gestión Estudiantil',
        },
      },
      sector: {
        id: commissionsJSON.length + 1,
        name: sectores,
        topic: 'Comision',
      },
      schedule: {
        id: commissionsJSON.length + 1,
        startDate: startDay,
        endDate: endtDay,
        startHour: '12:00',
        endHour: '14:00',
        scheduleDays: 'Lu-Mi-Vi',
      },
      subject: {
        id: commissionsJSON.length + 1,
        name: 'Matematica 1',
      },
      classroom: {
        id: commissionsJSON.length + 1,
        name: 'Lab 1',
      },
    };
    setCommissionsJSON([...commissionsJSON, newCommission]);
  };

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const handleStartDateChange = (newStartDate: Date) => {
    setStartDate(newStartDate);
  };
  const handleEndDateChange = (newEndDate: Date) => {
    setEndDate(newEndDate);
  };

  interface Sector {
    id: number;
    name: string;
  }

  const [selectedSector, setSelectedSector] = useState<Sector[]>([]);
  const handleSelectedSectorChange = (newSelectedSector: Sector[]) => {
    setSelectedSector(newSelectedSector);
  };

  const toggleTable = () => {
    setHasDocument(!hasDocument);
    if (hasDocument) {
      setTableData([]);
    } else {
      //asCommissions.create();
    }
  };

  const onFileLoaded = async (e: any) => {
    e.preventDefault();
    const excell = e.target?.files[0];
    const formData = new FormData();
    formData.append("file", excell);
    formData.append("startDate", startDate.toString());
    formData.append("endDate", endDate.toString());
    formData.append("sector", selectedSector.toString());

    setExcellData(formData)
    setSelectedFileName(excell.name);

    const newTableData: any = await asCommissions.toJson(formData);
    setTableData(Array.from(newTableData.data))
    toggleTable()
  }

  const uploadTemplate = () => {
    asCommissions.create(excellData)
  }

  const downloadTemplate = () => {
    asCommissions.getAll()
  };

  return (
    <div className="formCommission">
      <form className="mx-10">
        <div className=" flex h-[90px] justify-between items-center">
          <Sectores
            selectedSector={selectedSector}
            onSelectedSectorChange={handleSelectedSectorChange}
          />
          <div className="flex mt-[10px]">
            <DatePickerDays
              onChangeStartDate={handleStartDateChange}
              onChangeEndDate={handleEndDateChange}
            />
          </div>
        </div>
        <div className="flex justify-between rounded-[20px]">
          <div className="mr-[2em] mt-[20px] rounded-[20px]">
            {hasDocument ? (
              <div
                className={`${
                  hasDocument ? 'rounded-t-[20px]' : 'rounded-[20px]'
                } flex justify-center items-center bg-[#D9D9D9] w-[700px] h-[328px] ml-[110px] relative`}
              >
                <div className="flex">
                  <table className="absolute inset-0 border-collapse overflow-hidden rounded-t-[20px] ">
                    <thead className="relative bg-[#484848] text-[#BABABA]">
                      <tr className="flex justify-between">
                        <td className="ml-4 mt-[2px]">{selectedFileName}</td>
                        <td>
                          <button onClick={toggleTable} className="absolute right-0 mr-3 mt-[-7px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 35 35"
                              fill="none"
                            >
                              <path
                                className=""
                                d="M29.4931 26.673C29.8013 26.9812 29.9744 27.3992 29.9744 27.8351C29.9744 28.2709 29.8013 28.689 29.4931 28.9972C29.1849 29.3054 28.7668 29.4785 28.331 29.4785C27.8951 29.4785 27.4771 29.3054 27.1689 28.9972L18.4886 20.3142L9.80558 28.9944C9.49737 29.3027 9.07935 29.4758 8.64347 29.4758C8.2076 29.4758 7.78957 29.3027 7.48136 28.9944C7.17315 28.6862 7 28.2682 7 27.8323C7 27.3965 7.17315 26.9784 7.48136 26.6702L16.1644 17.99L7.4841 9.30695C7.17589 8.99874 7.00273 8.58071 7.00273 8.14484C7.00273 7.70896 7.17589 7.29094 7.4841 6.98273C7.79231 6.67452 8.21033 6.50137 8.6462 6.50137C9.08208 6.50137 9.5001 6.67452 9.80831 6.98273L18.4886 15.6657L27.1716 6.98136C27.4798 6.67315 27.8978 6.5 28.3337 6.5C28.7696 6.5 29.1876 6.67315 29.4958 6.98136C29.804 7.28957 29.9772 7.70759 29.9772 8.14347C29.9772 8.57935 29.804 8.99737 29.4958 9.30558L20.8128 17.99L29.4931 26.673Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr className="font-[500] text-[1.5em] text-center">
                      <th className="py-4 w-20"></th>
                        <th className="py-4 w-[15em]">Materia</th>
                        <th className="py-4 w-[15em]">Comisión</th>
                        <th className="py-4 w-[15em]">Aula</th>
                        <th className="py-4 w-[15em]">Turno</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((commission: any, index) => (
                        <tr
                          key={index}
                          className="border-solid border-y-2 border-neutral-400 text-center"
                        >
                          <td className="w-12 pl-4 opacity-60">{index}</td>
                          <td>{commission["Nombre materia"]}</td>
                          <td>{commission["Nombre"]}</td>
                          <td>{commission["Aula"]}</td>
                          <td>{commission["Turno"]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
                <>
                <label className={`${hasDocument ? 'rounded-t-[20px]' : 'rounded-[20px]'} flex flex-col items-center cursor-pointer justify-center w-[700px] h-[328px] ml-[110px] bg-[#D9D9D9]`}>
                  <svg
                    className="mt-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="45"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    {!hasDocument ? (
                      <path
                        d="M34 12.5V40.5C34 41.0304 33.7893 41.5391 33.4142 41.9142C33.0391 42.2893 32.5304 42.5 32 42.5H4C3.46957 42.5 2.96086 42.2893 2.58579 41.9142C2.21071 41.5391 2 41.0304 2 40.5V4.5C2 3.96957 2.21071 3.46086 2.58579 3.08579C2.96086 2.71071 3.46957 2.5 4 2.5H24M34 12.5H24V2.5M34 12.5L24 2.5M18 19.5V33.5M11 26.5H25"
                        stroke="#545454"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ) : null}
                  </svg>
                  <input
                    id="dropzone-file" 
                    type="file" 
                    onChange={onFileLoaded} 
                    className="hidden" />
                </label>
              </>
            )}
          </div>
        </div>
      </form>
      <div className="flex justify-between mx-6 mt-6">
        <Button
          onClick={downloadTemplate}
          active={hasDocument}
          type={2}
          label={'DESCARGAR TEMPLATE'}
        />
        <Button
          onClick={uploadTemplate}
          active={hasDocument}
          type={1}
          label={'GUARDAR'}
        />
      </div>
    </div>
  );
}

export default FormCommission;
