import { create } from "zustand";
import { filterMessages } from "../utils/arrays";
import { messages } from "../mocks/imagenes";

export interface DataCourse {
    id: number;
    subject: string;
    title: string;
    classroom: string;
    schedule: string;
  }

export interface StoreCourse {
    courseMessages: DataCourse[],
    addCourseMessage: (message: DataCourse) => void
}
  
const INITIAL_COURSE = filterMessages(messages, 'CREATE_COURSE')
  
export const useCourseMessages = create<StoreCourse>()(set => ({
    courseMessages: INITIAL_COURSE,
  
    addCourseMessage: (message: DataCourse) => {
      set((state) => ({
        courseMessages: [...state.courseMessages, message],
      }));
    },
}))
