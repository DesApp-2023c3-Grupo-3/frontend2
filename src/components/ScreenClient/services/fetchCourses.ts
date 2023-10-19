export const fetchCourses = async (sectorId:number) => {
    const request = await fetch(`http://localhost:3001/course/sector/${sectorId}`)
    const Courses = await request.json()
  
    return Courses
}
  