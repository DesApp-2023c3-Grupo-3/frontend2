import { useAvalaibleCourses } from '../../../hooks/useAvalaibleCourses';
import BillboardCard from '../../../styled-components/BillboardCard';
import DefaultCard from '../../../styled-components/DefaultCard';
import Footer from '../../../styled-components/Footer';
import Header from '../../../styled-components/Header';
import TableCourse from './TableCourse';

function Courses() {
  const { courseAvalaibleMessages } = useAvalaibleCourses();

  return (
    <BillboardCard>
      {courseAvalaibleMessages.length > 0 ? (
        <>
          <div>
            <Header />
            <TableCourse courseAvalaibleMessages={courseAvalaibleMessages} />
          </div>
          <Footer />
        </>
      ) : (
        <DefaultCard sx="h-full" />
      )}
    </BillboardCard>
  );
}

export default Courses;
