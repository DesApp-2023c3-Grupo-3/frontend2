import BillboardCard from '../../../styled-components/BillboardCard';
import Footer from '../../../styled-components/Footer';
import Header from '../../../styled-components/Header';
import TableCourse from './TableCourse';

function Courses() {
  return (
    <BillboardCard>
      <div>
        <Header />
        <TableCourse />
      </div>
      <Footer />
    </BillboardCard>
  );
}

export default Courses;
