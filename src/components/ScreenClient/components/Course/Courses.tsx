import { useCarousel } from '../../hooks/useCarousel';
import { DataCourse, useSocketStore } from '../../store/socketStore';
import { carouselTableArray } from '../../utils/carousel';
import Dots from '../Dots';
import Footer from './Footer';
import Header from './Header';
import TableCourse from './TableCourse';

const TIME_CAROUSEL_COURSES = 20;

const sortCourse = (course: DataCourse[]) => {
  return course.sort((course, otherCourse) =>
    course.subject.localeCompare(otherCourse.subject),
  );
};

function Courses() {
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
    <section className="col-start-4 col-end-13 bg-white flex flex-col justify-between">
      <Header />
      <TableCourse selectedItem={selectedItem} />
      {courseMessages.length > 1 && (
        <Dots
          selectedIndex={selectedIndex}
          items={courseMessagesCarousel}
          sx="mx-auto w-full justify-center"
        />
      )}
      <Footer />
    </section>
  );
}

export default Courses;
