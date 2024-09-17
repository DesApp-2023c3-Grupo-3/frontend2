import { useModal } from '../../hooks/useModal';
import { Advertising } from '../../types/customTypes';
import React from 'react';
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

function Avisos() {
  const [advertisingsJSON, setAdvertisingsJSON] = React.useState<Advertising[]>(
    [],
  );

  const [currentPages, setCurrentPages] = React.useState(1);
  const [totalItems, setTotalItems] = React.useState(0);

  const [editRow, setEditRow] = React.useState<Advertising>();
  const [isEditing, setIsEditing] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const { setSearchTerm } = useSearchTerm();

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

  const GetData = () => {
    setLoading(true);
    advertisingsAPI
      .getPaginated(currentPages, 6)
      .then((r) => {
        setTotalItems(r.data.total);
        setAdvertisingsJSON(r.data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  React.useEffect(() => {
    GetData();

    return () => {
      setSearchTerm('');
    };
  }, [currentPages]);

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
        return '1'; // createStarthour(advertising) + '-' + createEndHour(advertising);
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
      <div
        className={`w-[40px] h-[12px] ml-5 rounded-[8px] ${
          statusClasses[advertising.status] || 'bg-[#727272]'
        }`}
      ></div>
    );
  };

  const statusClasses: any = {
    active: 'bg-[#74C91E]',
    deprecated: 'bg-[#727272]',
    pending: 'bg-[#C2B222]',
    today: 'bg-[#C2B222]',
  };

  const isMobile = useIsMobile();

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
              dataJson={advertisingsJSON}
              handleCardClick={handleRowClick}
            />
          }
          loading={loading}
          title="Avisos"
          currentPage={currentPages}
          totalItems={totalItems}
          setCurrentPage={setCurrentPages}
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
          advertisingsJSON={advertisingsJSON}
          tableColumns={tableColumnsDesktop}
          handleRowClick={handleRowClick}
          isOpen={isOpen}
          onCloseClick={onCloseClick}
          openModal={openModal}
          GetData={GetData}
          isEditing={isEditing}
          editRow={editRow}
          loading={loading}
          currentPages={currentPages}
          totalItems={totalItems}
          setCurrentPage={setCurrentPages}
        />
      )}
    </>
  );
}

export default Avisos;
