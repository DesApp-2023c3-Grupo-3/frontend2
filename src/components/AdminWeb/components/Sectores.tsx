import { useState, useEffect } from 'react';
import { sectorApi } from '../../../services/sectores';
import Loader from './Loader';
import { Select, SelectItem } from '@nextui-org/react';
import ErrorMessage from './ErrorMessage';

interface SectoresProps {
  selectedSector: any[];
  onSelectedSectorChange: (newSelectedSector: any[]) => void;
  style?: string;
  hasError: boolean;
  canChooseMany: boolean;
}

function Sectores({
  selectedSector,
  onSelectedSectorChange,
  style,
  hasError,
  canChooseMany,
}: SectoresProps) {
  const [sectorArray, setSectorArray] = useState<Sector[]>([]);
  const [loading, setLoading] = useState(true);

  const updateSectorArray = async () => {
    try {
      const newSectors: Sector[] = await sectorApi.getSector();
      setSectorArray(sortedSectors(newSectors));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handlerOnSelect = (selectedSectors: string) => {
    const newSelectedSectors = sectorArray.filter((sector) =>
      selectedSectors?.includes(sector.topic),
    );
    onSelectedSectorChange(newSelectedSectors);
  };

  useEffect(() => {
    updateSectorArray();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Select
        label="Sectores"
        placeholder="Selecciona un sector"
        selectionMode={canChooseMany ? 'multiple' : 'single'}
        onChange={(e) => handlerOnSelect(e.target.value)}
        isInvalid={hasError}
        defaultSelectedKeys={selectedSector.map((sector) => sector.topic)}
        startContent={<PlaceIcon />}
      >
        {sectorArray.map((sector) => (
          <SelectItem key={sector.topic}>{sector.name}</SelectItem>
        ))}
      </Select>
    </div>
  );
}

export default Sectores;

function PlaceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="25"
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
  );
}

const sortedSectors = (sectors: Sector[]): Sector[] => {
  return [...sectors].sort((a, b) => a.id - b.id);
};

export interface Sector {
  id: number;
  name: string;
  topic?: any;
}
