import { useModal } from '../../hooks/useModal';
import { Advertising } from '../../types/customTypes';
import React, { useEffect } from 'react';
import { advertisingsAPI } from '../../../../services/advertisings';
import { Helmet } from 'react-helmet';
import { DesktopBody } from './components/Body/DesktopBody';
import { MobileBody } from '../../components/Mobile/MobileBody';
import { FormMobile } from './components/Form/Mobile/FormMobile';
import { userDiv } from '../../utils/userDiv';
import { useIsMobile } from '../../hooks/useIsMobile';
import { createEndHour } from '../../utils/createEndHour';
import { createSectors } from '../../utils/createSectors';
import { createSchedule } from '../../utils/createSchedule';
import { createStarthour } from '../../utils/createStartHour';
import ListOfAdvertisingCards from '../../components/Mobile/ListOfAdvertisingCards';
import useSearchTerm from '../../hooks/useSearchTermAdvertising';
import { Chip } from '@nextui-org/react';
import { useTabla } from '../../hooks/useTable';
import useDebounce from '../../hooks/useDebounce';

function Avisos() {
  const {
    advertisingJSON,
    setAdvertisingJSON,
    currentPages,
    setCurrentPage,
    rowsPerPage,
    totalItems,
    setTotalItems,
    setPages,
  } = useTabla();

  const [editRow, setEditRow] = React.useState<Advertising>();
  const [isEditing, setIsEditing] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const { searchTerm } = useSearchTerm();

  const handleRowClick = (advertising: Advertising) => {
    setEditRow(advertising);
    setIsEditing(true);
    openModal();
  };

  const { isOpen, openModal, closeModal } = useModal();

  const onCloseClick = () => {
    closeModal();
    setTimeout(() => {
      setEditRow(undefined);
      setIsEditing(false);
    }, 250);
  };

  const tableColumnsDesktop = new Map<string, (advertising: any) => void>([
    [
      '',
      (advertising: Advertising) => {
        return userDiv(
          advertising.user ? advertising.user?.role.name.charAt(0) : 'A',
        );
      },
    ],
    [
      'Nombre',
      (advertising: Advertising) => {
        return advertising.name;
      },
    ],
    [
      'Sector/es',
      (advertising: Advertising) => {
        return createSectors(advertising);
      },
    ],
    [
      'Días',
      (advertising: Advertising) => {
        return createSchedule(advertising);
      },
    ],
    [
      'Programación',
      (advertising: Advertising) => {
        return createStarthour(advertising) + '-' + createEndHour(advertising);
      },
    ],
    [
      'Estado',
      (advertising: Advertising) => {
        return status(advertising);
      },
    ],
  ]);

  const status = (advertising: Advertising) => {
    return (
      <Chip
        className="capitalize"
        color={statusClasses[advertising.status]}
        size="sm"
        variant="flat"
      >
        {statusNames[advertising.status]}
      </Chip>
    );
  };

  const statusClasses: any = {
    active: 'success',
    deprecated: 'default',
    pending: 'warning',
    today: 'warning',
  };

  const statusNames: any = {
    active: 'Activo',
    deprecated: 'Desactivado',
    pending: 'Pendiente',
    today: 'Hoy',
  };

  const isMobile = useIsMobile();

  const GetData = () => {
    setLoading(true);
    advertisingsAPI
      .getPaginated(currentPages, rowsPerPage, searchTerm)
      .then((r) => {
        setAdvertisingJSON(r.data.data);
        setTotalItems(r.data.total);
        setPages(r.data.totalPages);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const debounceSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    GetData();
  }, [debounceSearch, currentPages]);

  return (
    <>
      <Helmet>
        <title>Administrador de cartelera | Avisos</title>
      </Helmet>
      {isMobile ? (
        <MobileBody
          isOpen={isOpen}
          onCloseClick={onCloseClick}
          openModal={openModal}
          ListOfData={
            <ListOfAdvertisingCards
              dataJson={advertisingJSON}
              handleCardClick={handleRowClick}
            />
          }
          loading={loading}
          title="Avisos"
          currentPage={currentPages}
          totalItems={totalItems}
          setCurrentPage={setCurrentPage}
        >
          <FormMobile
            setAdvertisingsJSON={GetData}
            closeModal={onCloseClick}
            isCreate={!isEditing}
            advertising={editRow}
          />
        </MobileBody>
      ) : (
        <DesktopBody
          datasJSON={advertisingJSON}
          setAdvertisingJSON={setAdvertisingJSON}
          tableColumns={tableColumnsDesktop}
          handleRowClick={handleRowClick}
          isOpen={isOpen}
          onCloseClick={onCloseClick}
          openModal={openModal}
          GetData={GetData}
          isEditing={isEditing}
          editRow={editRow}
          loading={loading}
        />
      )}
    </>
  );
}
export default Avisos;
