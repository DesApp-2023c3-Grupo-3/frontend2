import { Commission } from '../../../types/customTypes';

function TableRow({
  commission,
  index,
}: {
  commission: Commission;
  index: number;
}) {
  return (
    <tr
      key={commission.id}
      className={index % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#DFDFDF]'}
    >
      <td id="Materia" className="px-4 py-2">
        {commission.subject.name}
      </td>
      <td id="Comisión" className="px-4 py-2">
        {commission.name}
      </td>
      <td id="Aula" className="px-4 py-2">
        {commission.classroom.name}
      </td>
      <td id="Horario" className="px-4 py-2">
        {commission.schedule.startHour} - {commission.schedule.endHour}
      </td>
    </tr>
  );
}

export default TableRow;