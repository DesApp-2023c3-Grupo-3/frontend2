import Footer from './Footer';
import Header from './Header';
import TableCourse from './TableCourse';

function Courses() {
  return (
    <section className="col-start-4 col-end-13 bg-white flex flex-col justify-between h-full">
      <Header />
      <TableCourse />
      <Footer />
    </section>
  );
}

export default Courses;
