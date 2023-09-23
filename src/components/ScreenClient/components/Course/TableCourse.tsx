import RowsCourse from './RowsCourse';
import { useCarousel } from '../../hooks/useCarousel';
import { DataCourse, useSocketStore } from '../../store/socketStore';
import Dots from '../Dots';
import { carouselTableArray } from '../../utils/carousel';

const TIME_CAROUSEL_COURSES = 2;

const sortCourse = (course: DataCourse[]) => {
  return course.sort((course, otherCourse) =>
    course.subject.localeCompare(otherCourse.subject),
  );
};

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
    <main className="p-5 h-full">
      <div className="relative overflow-x-auto rounded-lg">
        <table className="h-full w-full bg-[#74B235] text-center text-[2.3em]">
          <thead className="text-white uppercase h-[1.7em]">
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
