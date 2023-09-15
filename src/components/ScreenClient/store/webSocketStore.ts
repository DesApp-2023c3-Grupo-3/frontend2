import { create } from "zustand";
import { Message, Store } from "../../types";
import { advertisingMessages } from "../mocks/imagenes";

const INITIAL_STATE : Message [] = advertisingMessages

export const webSocketStore = create<Store>() (set => ({
    messages: INITIAL_STATE,
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