import { Advertising } from '../../../../types/customTypes';
import { abbreviateSectorName } from '../../../../utils/AbbreviateSectorName';

interface TableRowProps {
  advertising: Advertising;
  index: number;
  onRowClick: (advertising: Advertising) => void;
}

// Componente para mostrar una fila
function TableRow({ advertising, index, onRowClick }: TableRowProps) {
  const handleRowClick = () => {
    onRowClick(advertising);
  };

  return (
    <tr
      onClick={handleRowClick}
      key={advertising.id}
      className={` hover:bg-[#c4c4c4] ${
        index % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#DFDFDF]'
      }`}
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
      <td id="Dias" className="px-4 py-2">
        {advertising.schedule.scheduleDays
          .map((dia) => dia.slice(0, 2))
          .join('-')}
      </td>
      <td id="Horario" className="px-4 py-2">
        {advertising.schedule.startHour + '-' + advertising.schedule.endHour}
      </td>
      <td id="Estado" className="px-4 py-2">
        {'activo'}
      </td>{' '}
      {/* Falta hacer esto. */}
    </tr>
  );
}

export default TableRow;
