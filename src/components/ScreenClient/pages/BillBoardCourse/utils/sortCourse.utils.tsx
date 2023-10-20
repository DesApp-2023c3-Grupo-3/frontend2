import { DataCourse } from '../../../store/useCourseMessage';

export const sortCourse = (course: DataCourse[]) => {
  return course.sort((course, otherCourse) =>
    course.subject.localeCompare(otherCourse.subject),
  );
};
