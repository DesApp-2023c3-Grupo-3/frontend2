import * as React from 'react';
import Button from '../../../../components/Buttons/Button';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { commissionApi } from '../../../../../../services/commissions';
import {
  validateTwoDates,
  validationDate,
} from '../../../../utils/validationDate';
import Loader from '../../../../components/Loader';

interface FormMobileProps {
  setCommissionsJSON: (e: any) => void;
  closeModal: () => void;
}

export function FormMobile({
  setCommissionsJSON,
  closeModal,
}: FormMobileProps) {
  const [selectedFileName, setSelectedFileName] = React.useState('');
  const [startDate, setStartDate] = React.useState<any>(null);
  const [endDate, setEndDate] = React.useState<any>(null);
  const [selectedSector, setSelectedSector] = React.useState<Sector[]>([]);
  const [hasDocument, setHasDocument] = React.useState<boolean>(false);
  const [excelData, setExcelData] = React.useState<any>();

  const [currentStep, setCurrentStep] = React.useState(1);

  const [loadingDownload, setLoadingDownload] = React.useState(false);
  const [loadingSave, setLoadingSave] = React.useState(false);

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    } else {
      setCurrentStep(1);
    }
  };

  const updateCommissionsTable = async () => {
    try {
      const updatedCommissions: any = await commissionApi.getAll();
      setCommissionsJSON((updatedCommissions?.data as Commission[]) || []);
    } catch (error) {
      console.error(error);
    }
  };

  const hasValidCommission = () => {
    return hasDocument && selectedSector.length !== 0 && startDate && endDate;
  };

  const uploadTemplate = () => {
    if (!hasValidCommission()) {
      validateStep2();
    } else {
      setLoadingSave(true);
      excelData.append('startDate', startDate.toISOString());
      excelData.append('endDate', endDate.toISOString());
      excelData.append('sector', selectedSector[0].id.toString());
      commissionApi.create(excelData).then(() => {
        updateCommissionsTable();
        closeModal();
        setLoadingSave(false);
      });
    }
  };

  const downloadTemplate = () => {
    setLoadingDownload(true);
    commissionApi.download(selectedSector[0].id).finally(() => {
      setLoadingDownload(false);
    });
  };

  const [emptyFieldsStep1, setEmptyFieldsStep1] = React.useState({
    selectedSector: false,
    date: false,
  });

  const validateStep1 = () => {
    const update = {
      selectedSector: selectedSector.length === 0,
      date: validationDate(startDate, endDate),
    };
    setEmptyFieldsStep1(update);

    return (
      !update.selectedSector &&
      !update.date &&
      startDate &&
      endDate &&
      !validationDate(startDate, endDate) &&
      !validateTwoDates(startDate, endDate)
    );
  };

  const [isValidateStep2, setValidateStep2] = React.useState(true);

  const validateStep2 = () => {
    setValidateStep2(hasDocument);

    return isValidateStep2;
  };

  return (
    <div>
      <div className="dark:text-white">
        <h2 className="flex justify-center items-center font-bold text-[24px] mt-2 ">
          COMISIONES
        </h2>
        {currentStep === 1 ? (
          <div className="">
            <h4 className="flex justify-center items-center font-semibold text-[16px]">
              Sector y Fecha
            </h4>
            <div className="mt-4">
              <Step1
                selectedSector={selectedSector}
                setSelectedSector={setSelectedSector}
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                emptyFields={emptyFieldsStep1}
              />
            </div>
          </div>
        ) : (
          <div className="">
            <h4 className="flex justify-center items-center font-semibold text-[16px]">
              Archivo de comisiones
            </h4>
            {
              <Step2
                setExcelData={setExcelData}
                hasDocument={hasDocument}
                setHasDocument={setHasDocument}
                selectedFileName={selectedFileName}
                setSelectedFileName={setSelectedFileName}
                downloadTemplate={downloadTemplate}
                isValidateStep2={isValidateStep2}
              />
            }
          </div>
        )}

        <div
          id="buttons"
          className=" m-auto absolute bottom-[6vw] left-0 right-0"
        >
          {currentStep === 1 ? (
            <div className="flex justify-center">
              <Button
                onClick={handleNextStep}
                active={true}
                type={1}
                label="SIGUIENTE"
              ></Button>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <button
                className="bg-[#D9D9D9] rounded-full mr-3 h-[40px] w-[40px] flex justify-center items-center"
                onClick={handleNextStep}
              >
                {previous}
              </button>
              <div>
                <div className="mb-3">
                  {!loadingDownload ? (
                    <Button
                      onClick={downloadTemplate}
                      active={hasDocument}
                      type={2}
                      label={'DESCARGAR TEMPLATE'}
                    />
                  ) : (
                    <Loader />
                  )}
                </div>
                <div>
                  {!loadingSave ? (
                    <Button
                      onClick={uploadTemplate}
                      active={hasValidCommission()}
                      type={1}
                      label={'GUARDAR'}
                    />
                  ) : (
                    <Loader />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const previous = (
  <svg
    className="flex justify-center items-center"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="m15 6l-6 6l6 6"
    />
  </svg>
);
