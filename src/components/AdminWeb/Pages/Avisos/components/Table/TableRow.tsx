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

  const status = advertising.status;

  const statusClasses: any = {
    active: 'bg-[#74C91E]',
    deprecated: 'bg-[#727272]',
    pending: 'bg-[#C2B222]',
    today: 'bg-[#C2B222]',
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
        {advertising.advertisingSectors
          .map((sector) => sector.sector.name)
          .map((s) => abbreviateSectorName(s))
          .join('-')}
      </td>
      <td id="Dias" className="px-4 py-2">
        {advertising.advertisingSchedules
          .map((schedule) => schedule.schedule.dayCode)
          .map((d) => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase())
          .join('-')}
      </td>
      <td id="Horario" className="px-4 py-2">
        {advertising.advertisingSchedules.map((i) =>
          i.schedule.startHour.slice(11, 16),
        )[0] +
          '-' +
          advertising.advertisingSchedules.map((i) =>
            i.schedule.endHour.slice(11, 16),
          )[0]}
      </td>
      <td id="Estado" className="px-4 py-2">
        <div
          className={`w-[40px] h-[12px] ml-5 rounded-[8px] ${
            statusClasses[status] || 'class-default'
          }`}
        ></div>
      </td>
    </tr>
  );
}

export default TableRow;
