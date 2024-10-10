import { useEffect } from 'react';
import { useMaps } from '../../store/useMaps';
import { mapApi } from '../../../../../../services/map';
import MapCard from './components/MapCard';

function MapMain() {
  const { maps, setMaps } = useMaps();

  useEffect(() => {
    mapApi.getAll().then((res) => setMaps(res.data));
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {maps.map((map) => (
        <MapCard
          key={map.id}
          id={map.id}
          name={map.name}
          originalName={map.originalName}
        />
      ))}
    </div>
  );
}

export default MapMain;
