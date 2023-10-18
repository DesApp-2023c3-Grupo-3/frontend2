export const fetchCourses = async (screenId:number) => {
    const request = await fetch(`http://localhost:3001/courses/sector/${screenId}`)
    const Courses = await request.json()
  
    return Courses
}
  