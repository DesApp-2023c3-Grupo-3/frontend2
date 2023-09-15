import { create } from "zustand";

export type Data = {
    advertisingTypeId: number,
    id: number,
    payload: string,
    title: string
}

export type Message = {
    topic: string,
    id: number,
    data: Data 
}

type Store = {
    messages: Message [],
    addMessage: (message:Message) => void,
    deleteMessage: (id: number) => void 
}

export const webSocketStore = create<Store>() (set => ({
    messages: [],
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