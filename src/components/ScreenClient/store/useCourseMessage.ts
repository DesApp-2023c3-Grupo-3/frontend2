import { create } from "zustand";
import { filterMessages } from "../utils/arrays";
import { messages } from "../mocks/imagenes";
import { isActiveMessage } from "../utils/hour";

export interface DataCourse {
    subject: string;
    name: string;
    classroom: string;
    schedule: string;
    startHour: string;
    endHour: string
}

export interface StoreCourse {
    courseMessages: DataCourse[]
    avalaibleCourseMessages: DataCourse[]
    error: string
    addCourseMessages: (message: DataCourse[]) => void
    addAvalaibleCourseMessage: () => void
    setError: (error:string) => void
    fetchAdvertisingsBySectorId: (sectorId:number) => void
}
  
const INITIAL_COURSE = filterMessages(messages, 'CREATE_COURSE')
  
export const useCourseMessages = create<StoreCourse>()((set, get) => ({
    courseMessages: INITIAL_COURSE,
    avalaibleCourseMessages: [],  
    error: '',

    addCourseMessages: (messages: DataCourse[]) => {
      set((state) => ({
        courseMessages: [...state.courseMessages, ...messages],
      }));
    },

    addAvalaibleCourseMessage: () => {
      setInterval(() => {
        const newAvailableMessages = get().courseMessages.filter(message => isActiveMessage({ 
          startHour: message.startHour,
          endHour: message.endHour
        }))
        
        if(JSON.stringify(newAvailableMessages) !== JSON.stringify(get().avalaibleCourseMessages)) {
              set(({
                avalaibleCourseMessages: newAvailableMessages
              }))
        }
      }, 1000)
    },

    setError: (error:string) => {
      set(({
        error
      }))
    },

    
}))
