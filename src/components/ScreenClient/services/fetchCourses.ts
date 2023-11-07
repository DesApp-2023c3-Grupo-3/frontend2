import { ROUTES_RELATIVE } from '../../../routes/route.relatives';

export const fetchCourses = async (sectorId:number) => {
    const request = await fetch(`${ROUTES_RELATIVE.course.courseSector}/${sectorId}`)
    const Courses = await request.json()
  
    return Courses
}
  