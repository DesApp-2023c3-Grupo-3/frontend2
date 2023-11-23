import * as React from 'react';
import { commissionApi } from '../../../../../../services/commissions';
import Loader from '../../../../components/Loader';
import ErrorMessage from '../../../../components/ErrorMessage';

interface Step2Props {
  setExcelData: (e: any) => void;
  hasDocument: boolean;
  setHasDocument: (e: boolean) => void;
  selectedFileName: string;
  setSelectedFileName: (e: string) => void;
  downloadTemplate: () => void;
  isValidateStep2: boolean;
}

export function Step2({
  setExcelData,
  hasDocument,
  setHasDocument,
  setSelectedFileName,
  selectedFileName,
  isValidateStep2,
}: Step2Props) {
  const [tableData, setTableData] = React.useState<Commission[]>([]);
  const [loading, setLoading] = React.useState(false);

  const toggleTable = () => {
    setHasDocument(!hasDocument);
    if (hasDocument) {
      setTableData([]);
    }
  };

  const onFileLoaded = async (e: any) => {
    e.preventDefault();
    const excel = e.target?.files[0];
    const formData = new FormData();
    formData.append('file', excel);
    setExcelData(formData);
    setSelectedFileName(excel.name);
    setLoading(true);
    try {
      const newTableData: any = await commissionApi.toJson(formData);
      if (Array.isArray(newTableData.data)) {
        setTableData(Array.from(newTableData.data));
        toggleTable();
      } else {
        alert('El archivo subido no es válido');
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative h-[100%] mx-2 bg-[#D9D9D9] flex justify-center items-center overflow-auto">
      {loading ? (
        <Loader />
      ) : (
        <>
          {hasDocument ? (
            <div className="">
              <table className=" bg-[#484848] absolute w-[100%] inset-0">
                <thead className="bg-[#484848] text-[#BABABA]">
                  <tr className="flex justify-between py-3">
                    <td className="absolute ml-4 mt-[-11px] text-ellipsis overflow-auto w-[90%] max-h-[30px] h-[30px]">
                      {selectedFileName}
                    </td>
                    <td>
                      <button
                        onClick={toggleTable}
                        className="absolute right-0 mr-[0.3em] mt-[-7px]"
                      >
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
                    <th className="py-4 w-[10%]"></th>
                    <th className="py-4 w-[30%]">Materia</th>
                    <th className="py-4 w-[30%]">Comisión</th>
                    <th className="py-4 w-[30%]">Aula</th>
                  </tr>
                </thead>
                <tbody className="bg-[#D9D9D9]">
                  {tableData.map((commission: any, index) => (
                    <tr
                      key={index}
                      className="border-solid border-y-2 border-neutral-400 text-center"
                    >
                      <td className="w-[10%] pl-4 opacity-60">{index}</td>
                      <td className="w-[30%] max-w-[30%] text-ellipsis">
                        {commission['Nombre materia']}
                      </td>
                      <td className="w-[30%] max-w-[30%] text-ellipsis">
                        {commission['Nombre']}
                      </td>
                      <td className="w-[30%] max-w-[30%] text-ellipsis">
                        {commission['Aula']}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <label
                className={`${
                  hasDocument ? 'rounded-t-[20px]' : 'rounded-[20px]'
                } flex flex-col items-center cursor-pointer justify-center`}
              >
                <svg
                  className="mt-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="45"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M34 12.5V40.5C34 41.0304 33.7893 41.5391 33.4142 41.9142C33.0391 42.2893 32.5304 42.5 32 42.5H4C3.46957 42.5 2.96086 42.2893 2.58579 41.9142C2.21071 41.5391 2 41.0304 2 40.5V4.5C2 3.96957 2.21071 3.46086 2.58579 3.08579C2.96086 2.71071 3.46957 2.5 4 2.5H24M34 12.5H24V2.5M34 12.5L24 2.5M18 19.5V33.5M11 26.5H25"
                    stroke="#545454"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  id="dropzone-file"
                  type="file"
                  onChange={onFileLoaded}
                  className="hidden"
                />
              </label>
              {ErrorMessage(
                '*Falta agregar un archivo con las comisiones.',
                !isValidateStep2,
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
