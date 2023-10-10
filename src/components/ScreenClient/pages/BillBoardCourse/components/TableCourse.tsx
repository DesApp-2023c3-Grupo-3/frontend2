import RowsCourse from './RowsCourse';
import { useCarousel } from '../../../hooks/useCarousel';
import { useSocketStore } from '../../../store/socketStore';
import Dots from '../../../components/Dots';
import { carouselTableArray } from '../../../utils/carousel';
import { sortCourse } from './utils/sortCourse.utils';

const TIME_CAROUSEL_COURSES = 10;

function TableCourse(props: any) {
  const courseMessages = useSocketStore((state) => state.getCoursesMessages());
  const courseMessagesCarousel = carouselTableArray(
    sortCourse(courseMessages),
    11,
  );

  const { selectedIndex, selectedItem } = useCarousel(
    courseMessagesCarousel,
    TIME_CAROUSEL_COURSES,
  );

  return (
    <main className="p-[2vh] pb-0">
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full bg-[#74B235] text-center text-[3.3vh]">
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
      {courseMessages.length > 1 && (
        <Dots
          selectedIndex={selectedIndex}
          items={courseMessagesCarousel}
          sx="mx-auto w-full justify-center"
        />
      )}
    </main>
  );
}

export default TableCourse;
