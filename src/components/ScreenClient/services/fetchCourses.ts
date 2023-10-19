const BASE_URL = process.env.REACT_APP_API || "http://[::1]:3001/"

export const fetchCourses = async (sectorId:number) => {
    const request = await fetch(`${BASE_URL}/course/sector/${sectorId}`)
    const Courses = await request.json()
  
    return Courses
}
  