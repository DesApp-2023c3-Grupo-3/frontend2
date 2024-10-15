import { useEffect, useState } from 'react';
import { useMaps } from '../../store/useMaps';
import { mapApi } from '../../../../../../services/map';
import MapCard from './components/MapCard';
import ModalMapView from './components/ModalMapView';
import { useModal } from '../../../../hooks/useModal';
import Loader from '../../../../components/Loader';

function MapMain() {
  const { maps, setMaps } = useMaps();
  const { isOpen, openModal, closeModal } = useModal();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mapApi
      .getAll()
      .then((res) => {
        setMaps(res.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(true));
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {isLoading ? (
        <Loader />
      ) : maps.length === 0 ? (
        <p className="text-3xl font-bold">No hay mapas para mostrar</p>
      ) : (
        maps.map((map) => (
          <MapCard
            onClick={openModal}
            key={map.id}
            id={map.id}
            name={map.name}
            estaSeleccionado={map.estaSeleccionado}
            originalName={map.originalName}
          />
        ))
      )}

      <ModalMapView
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
    </div>
  );
}

export default MapMain;
