import { Advertising } from '../../types/customTypes';
import { abbreviateSectorName } from '../../utils/AbbreviateSectorName';

// Componente para mostrar una fila
function TableRow({
  advertising,
  index,
}: {
  advertising: Advertising;
  index: number;
}) {
  return (
    <tr
      key={advertising.id}
      className={index % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#DFDFDF]'}
    >
      <td
        id="User"
        className="px-4 py-2 m-2 ml-10 flex justify-center items-center text-white text-[32px] font-[500] bg-[#2C9CBF] rounded-full w-[60px] h-[60px] text-center"
      >
        {advertising.user.role.name.charAt(0)}
      </td>
      <td id="Nombre" className="px-4 py-2">
        {advertising.name}
      </td>
      <td id="Sector" className="px-4 py-2">
        {abbreviateSectorName(advertising.sector.name)}
      </td>
      {/* Cambiar si son varios sectores */}
      <td className="px-4 py-2">{advertising.schedule.scheduleDays}</td>
      <td className="px-4 py-2">
        {advertising.schedule.startHour + '-' + advertising.schedule.endHour}
      </td>
      <td className="px-4 py-2">{'activo'}</td> {/* Falta hacer esto. */}
    </tr>
  );
}

export default TableRow;
