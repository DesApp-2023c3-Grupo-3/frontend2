import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { abbreviateSectorName } from '../../../../utils/AbbreviateSectorName';
import { Checkbox } from '@mui/material';

const sectors = [
  { id: 1, name: 'Edificio Malvinas' },
  { id: 2, name: 'Sector 6' },
  { id: 3, name: 'Sector E' },
  { id: 4, name: 'Origone A' },
];

interface SectoresProps {
  selectedSector: Sector[];
  onSelectedSectorChange: (newSelectedSector: Sector[]) => void;
}

function Sectores({ selectedSector, onSelectedSectorChange }: SectoresProps) {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setSelectAll(event.target.checked);

    if (!selectAll) {
      onSelectedSectorChange(sectors);
    } else {
      onSelectedSectorChange([]);
    }
  };

  return (
    <div className="w-[365px] h-[50px] mt-[17px]">
      <Listbox
        value={selectedSector}
        onChange={onSelectedSectorChange}
        multiple
      >
        <div className="fixed flex-row justify-center">
          <Listbox.Button
            className={
              'text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center'
            }
            placeholder="Sector/es"
          >
            <div className="mr-5 ml-[-15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="29"
                viewBox="0 0 24 29"
                fill="none"
              >
                <path
                  d="M12 27.5C12.2747 27.5 12.5075 27.4103 12.6532 27.3429C12.8143 27.2683 12.9701 27.1724 13.113 27.0738C13.3992 26.8762 13.7145 26.6109 14.0367 26.3149C14.6853 25.719 15.4462 24.9206 16.1975 24.0818C17.6923 22.4129 19.2376 20.4848 19.8746 19.5112C19.9294 19.4275 19.9837 19.3446 20.0375 19.2625C21.771 16.6166 23 14.7407 23 11.4195C23 5.60949 18.018 1 12 1C5.98205 1 1 5.60949 1 11.4195C1 14.8474 2.20738 16.7121 4.0359 19.5107C4.71599 20.5515 6.28652 22.4822 7.79415 24.1358C8.5522 24.9672 9.31716 25.7538 9.96849 26.3397C10.292 26.6308 10.6082 26.8911 10.895 27.0848C11.0381 27.1814 11.1938 27.2751 11.3544 27.3478C11.5 27.4137 11.73 27.5 12 27.5Z"
                  fill="#919191"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 16.1295C14.7614 16.1295 17 14.0209 17 11.4197C17 8.8186 14.7614 6.70996 12 6.70996C9.23858 6.70996 7 8.8186 7 11.4197C7 14.0209 9.23858 16.1295 12 16.1295Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <span className="flex text-black opacity-[0.33] items-center">
              {selectedSector.length === 0
                ? 'Sector/es'
                : selectedSector
                    .map((sector) => abbreviateSectorName(sector.name))
                    .join(', ')}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="bg-white w-[254px] ml-auto flex-row justify-center items-center shadow-lg rounded-t-[2px] rounded-b-[10px] ">
              <span className="m-3 flex justify-center text-[#00000080] text-[20px]">
                Edificio
              </span>
              {sectors.map((sector, sextorIdx) => (
                <div key={sextorIdx} className="flex justify-center">
                  <div>
                    <Listbox.Option
                      className={({ active, selected }) =>
                        ` border-2 border-[#919191] flex justify-start items-center relative cursor-pointer mb-[3px] pl-2 rounded-[20px] h-[30px] w-[82px] 
                                ${
                                  active
                                    ? 'bg-[#2C9CBF] text-white'
                                    : 'text-[#000]'
                                }
                                ${
                                  selected
                                    ? 'bg-[#2C9CBF] border-[#2C9CBF]'
                                    : ''
                                }
                                `
                      }
                      value={sector}
                      onClick={() => {
                        onSelectedSectorChange([...selectedSector, sector]);
                      }}
                    >
                      {({ selected }) => (
                        <div className="flex justify-start items-center">
                          <span
                            className={`truncate flex justify-start items-center${
                              selected
                                ? 'font-medium text-white '
                                : 'font-normal'
                            }`}
                          >
                            {abbreviateSectorName(sector.name)}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center">
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
                <span>Seleccionar todo</span>
              </div>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default Sectores;

interface Sector {
  id: number;
  name: string;
}
