import { useModal } from '../../hooks/useModal';
import { Advertising } from '../../types/customTypes';
import React from 'react';
import { advertisingsAPI } from '../../../../services/advertisings';
import { Helmet } from 'react-helmet';
import { abbreviateSectorName } from '../../utils/AbbreviateSectorName';
import dayjs from 'dayjs';
import { DesktopBody } from './components/Body/DesktopBody';
import { MobileBody } from '../../components/Mobile/MobileBody';
import { FormMobile } from './components/Form/Mobile/FormMobile';
import { userDiv } from '../../utils/userDiv';

function Avisos() {
  const [advertisingsJSON, setAdvertisingsJSON] = React.useState<Advertising[]>(
    [],
  );

  const [editRow, setEditRow] = React.useState<Advertising>();
  const [isEditing, setIsEditing] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const handleRowClick = (advertising: any) => {
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
      .getAll()
      .then((r) => {
        const orderedData = r.data.sort((a: any, b: any) => {
          const order = ['active', 'today', 'pending', 'deprecated'];
          return order.indexOf(a.status) - order.indexOf(b.status);
        });

        setAdvertisingsJSON(orderedData);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  React.useEffect(() => {
    GetData();
  }, []);

  const sectores = (advertising: Advertising) =>
    advertising.advertisingSectors
      .map((sector) => sector.sector.name)
      .map((s) => abbreviateSectorName(s))
      .join('-');

  const dayOrder = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

  const schedule = (advertising: Advertising) => {
    if (advertising.advertisingSchedules.length === 7) {
      return 'Todos los días';
    } else {
      return advertising.advertisingSchedules
        .map((schedule) => schedule.schedule.dayCode)
        .map((d) => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase())
        .sort((a, b) => {
          return dayOrder.indexOf(a) - dayOrder.indexOf(b);
        })
        .join('-');
    }
  };

  const starthour = (advertising: Advertising) =>
    dayjs(advertising.advertisingSchedules[0].schedule.startHour).format(
      'HH:mm',
    );

  const endhour = (advertising: Advertising) =>
    dayjs(advertising.advertisingSchedules[0].schedule.endHour).format('HH:mm');

  const tableColumnsDesktop = new Map<string, (advertising: any) => void>([
    [
      '',
      (advertising: Advertising) => {
        return userDiv(advertising.user.role.name.charAt(0));
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
        return sectores(advertising);
      },
    ],
    [
      'Días',
      (advertising: Advertising) => {
        return schedule(advertising);
      },
    ],
    [
      'Programación',
      (advertising: Advertising) => {
        return starthour(advertising) + '-' + endhour(advertising);
      },
    ],
    [
      'Estado',
      (advertising: Advertising) => {
        return status(advertising);
      },
    ],
  ]);

  const tableColumnsMobile = new Map<string, (user: any) => void>([
    [
      'Nombre',
      (advertising: Advertising) => {
        return advertising.name;
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

  const [isMobile, setIsMobile] = React.useState(
    window.matchMedia('(max-width: 768px)').matches,
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Administrador de cartelera | Avisos</title>
      </Helmet>
      {isMobile ? (
        <MobileBody
          dataJson={advertisingsJSON}
          tableColumns={tableColumnsMobile}
          handleRowClick={handleRowClick}
          isOpen={isOpen}
          onCloseClick={onCloseClick}
          openModal={openModal}
          loading={loading}
          title="Avisos"
          placeholder="Buscar Avisos"
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
        />
      )}
    </>
  );
}

export default Avisos;
