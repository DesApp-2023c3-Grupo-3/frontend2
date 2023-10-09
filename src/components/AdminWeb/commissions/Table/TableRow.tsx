import { Commission } from '../../types/customTypes';

// Componente para mostrar una fila
function TableRow({
  commision,
  index,
}: {
  commision: Commission;
  index: number;
}) {
  return (
    <tr
      key={commision.id}
      className={index % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#DFDFDF]'}
    >
      <td id="Materia" className="px-4 py-2">
        {commision.subject.name}
      </td>
      <td id="Comisión" className="px-4 py-2">
        {commision.name}
      </td>
      <td id="Aula" className="px-4 py-2">
        {commision.classroom.name}
      </td>
      <td id="Horario" className="px-4 py-2">
        {commision.schedule.startHour} - {commision.schedule.endHour}
      </td>
    </tr>
  );
}

export default TableRow;
