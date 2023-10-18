import { create } from "zustand";
import { filterMessages } from "../utils/arrays";
import { messages } from "../mocks/imagenes";

export interface DataCourse {
    subject: string;
    name: string;
    classroom: string;
    schedule: string;
  }

export interface StoreCourse {
    courseMessages: DataCourse[],
    addCourseMessages: (message: DataCourse[]) => void
}
  
const INITIAL_COURSE = filterMessages(messages, 'CREATE_COURSE')
  
export const useCourseMessages = create<StoreCourse>()(set => ({
    courseMessages: INITIAL_COURSE,
  
    addCourseMessages: (messages: DataCourse[]) => {
      set((state) => ({
        courseMessages: [...state.courseMessages, ...messages],
      }));
    },
    
}))
