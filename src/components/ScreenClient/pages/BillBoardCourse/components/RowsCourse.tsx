import { DataCourse } from '../../../store/useCourseMessage';
import dayjs from 'dayjs';

function RowsCourse({ items }: { items: DataCourse[] }) {
  const formatHour = (date: string) => {
    const newDate = dayjs(new Date(date));

    const hour = String(newDate.hour()).padStart(2, '0');
    const minutes = String(newDate.minute()).padStart(2, '0');

    return `${hour}:${minutes}`;
  };

  return (
    <tbody>
      {items.map((data, index: number) => {
        const scheduleStart = formatHour(data.startHour);
        const scheduleEnd = formatHour(data.endHour);

        return (
          <tr
            key={index}
            className={`whitespace-nowrap text-[#343434] ${
              index % 2 === 0 ? 'bg-white' : 'bg-[#D9D9D9]'
            }`}
          >
            <td className="">{data.subject}</td>
            <td>{data.name}</td>
            <td>{data.classroom}</td>
            <td>{scheduleStart + '-' + scheduleEnd}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default RowsCourse;
