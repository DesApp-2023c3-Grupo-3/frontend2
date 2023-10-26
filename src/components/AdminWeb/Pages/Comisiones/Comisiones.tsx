import TableMain from './components/Table/TableMain';
import { useEffect, useState, useTransition } from 'react';
import { Commission } from '../../types/customTypes';
import ModalCreateCommission from './components/Modal/ModalCreateCommission';
import { commissionApi } from '../../../../services/commissions';
import { Helmet } from 'react-helmet';

function Comisiones() {
  const [commissionsJSON, setCommissionsJSON] = useState<any[]>([]);
  const [_, loadCommissions] = useTransition();

  const updateCommissionsTable = async () => {
    const updatedCommissions: any = await commissionApi.getAll();
    setCommissionsJSON((updatedCommissions?.data as Commission[]) || []);
  };

  useEffect(() => {
    loadCommissions(() => {
      updateCommissionsTable();
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Administrador de cartelera | Comisiones</title>
      </Helmet>
      <div className="flex flex-col w-100 pl-12">
        <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px]">
          Comisiones
        </h1>
        <div className="mt-[-70px] mr-[3.1%]">
          <TableMain commissionsJSON={commissionsJSON} />
          <div className="flex justify-end">
            <ModalCreateCommission
              commissionsJSON={commissionsJSON}
              setCommissionsJSON={setCommissionsJSON}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Comisiones;
