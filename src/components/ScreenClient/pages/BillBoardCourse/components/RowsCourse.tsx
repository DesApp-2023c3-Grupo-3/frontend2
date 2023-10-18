import { DataCourse } from '../../../store/useCourseMessage';

function RowsCourse({ items }: { items: DataCourse[] }) {
  return (
    <tbody>
      {items.map((data, index: number) => {
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
            <td>{data.schedule}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default RowsCourse;
