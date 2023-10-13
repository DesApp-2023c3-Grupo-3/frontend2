import TableRow from './TableRow';
import { Commission } from '../../../types/customTypes';

//componente para la tabla completa
function TableCommissions({ commissions }: { commissions: Commission[] }) {
  return (
    <table className="table-auto border-collapse overflow-hidden rounded-tl-[20px] rounded-tr-[20px] mt-10 font-[500]">
      <thead className="bg-[#484848] text-[#BABABA] text-[1.5em] text-left">
        <tr>
          <th className="px-4 py-4 w-[17.937em]">Materia</th>
          <th className="px-4 py-4 w-[17.937em]">Comisión</th>
          <th className="px-4 py-4 w-[17.937em]">Aula</th>
          <th className="px-4 py-4 w-[17.937em]">Horario</th>
        </tr>
      </thead>
      <tbody className="text-[20px] font[500]">
        {commissions.map((data, index) => (
          <TableRow key={data.id} commission={data} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default TableCommissions;