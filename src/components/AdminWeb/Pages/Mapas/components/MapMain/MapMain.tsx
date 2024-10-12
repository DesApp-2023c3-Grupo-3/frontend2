import { useEffect } from 'react';
import { useMaps } from '../../store/useMaps';
import { mapApi } from '../../../../../../services/map';
import MapCard from './components/MapCard';
import ModalMapView from './components/ModalMapView';
import { useModal } from '../../../../hooks/useModal';

function MapMain() {
  const { maps, setMaps } = useMaps();
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    mapApi.getAll().then((res) => setMaps(res.data));
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {maps.map((map) => (
        <MapCard
          onClick={openModal}
          key={map.id}
          id={map.id}
          name={map.name}
          estaSeleccionado={map.estaSeleccionado}
          originalName={map.originalName}
        />
      ))}
      <ModalMapView
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
    </div>
  );
}

export default MapMain;
