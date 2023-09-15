import { create } from "zustand";
import { Message, Store } from "../../types";
import { advertisingMessages } from "../mocks/imagenes";
import { filterMessages } from "../utils/filter";

const INITIAL_STATE : Message [] = advertisingMessages

const TYPE_MESSAGES = {
    advertising: "advertising",
    courses: "courses"
}

export const useSocketStore = create<Store>() ((set, get) => ({
    messages: INITIAL_STATE,
    getAdvertisingMessages: () => filterMessages(get().messages, TYPE_MESSAGES.advertising),
    getCoursesMessages: () => filterMessages(get().messages, TYPE_MESSAGES.courses),

    addMessage: (message) => { 
        set(state => ({ 
            messages: [
                ...state.messages, message
            ] 
        })) 
    },

    deleteMessage: (id) => {
        set(state => ({
            messages: state.messages.filter(message => message.id !== id)
        }))
    }
})) 