import RowsCourse from './RowsCourse';
import { useCarousel } from '../../../hooks/useCarousel';
import Dots from '../../../components/Dots';
import { useConnectionMessage } from '../../../store/useConnectionMessage';
import { DataCourse } from '../../../store/useCourseMessage';

function TableCourse({
  courseAvalaibleMessages,
}: {
  courseAvalaibleMessages: DataCourse[][];
}) {
  const carouselTime = useConnectionMessage((state) => state.connectionMessage);

  const { selectedIndex, selectedItem } = useCarousel(
    courseAvalaibleMessages,
    carouselTime.screen.courseIntervalTime,
  );

  return (
    <main className="p-[2vh] pb-0">
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full bg-[#74B235] text-center text-[3.7vh]">
          <thead className="text-white uppercase">
            <tr>
              <th className="font-normal w-1/4" scope="col">
                Materia
              </th>
              <th className="font-normal w-1/4" scope="col">
                Comision
              </th>
              <th className="font-normal w-1/4" scope="col">
                Aula
              </th>
              <th className="font-normal w-1/4" scope="col">
                Horario
              </th>
            </tr>
          </thead>
          <RowsCourse items={selectedItem} />
        </table>
      </div>
      {courseAvalaibleMessages.length > 1 && (
        <Dots
          selectedIndex={selectedIndex}
          items={courseAvalaibleMessages}
          sx="mx-auto w-full justify-center"
        />
      )}
    </main>
  );
}

export default TableCourse;
