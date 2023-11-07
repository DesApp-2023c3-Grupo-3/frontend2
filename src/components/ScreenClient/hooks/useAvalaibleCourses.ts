import { sortCourse } from "../pages/BillBoardCourse/utils/sortCourse.utils";
import { useCourseMessages } from "../store/useCourseMessage";
import { useEffect } from 'react'
import { carouselTableArray } from "../utils/carousel";

export function useAvalaibleCourses() {
    const [
        avalaibleCourseMessages,
        addAvalaibleCourseMessage
    ] = useCourseMessages(state => [
        state.avalaibleCourseMessages,
        state.addAvalaibleCourseMessage
    ])

    useEffect(() => {
        addAvalaibleCourseMessage()
    }, [])

    const courseAvalaibleMessages = carouselTableArray(
        sortCourse(avalaibleCourseMessages),
        10,
      )

    return { courseAvalaibleMessages }
}