import { create } from "zustand";

type Data = {
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
    addMessage: (message:Message) => void
}

export const webSocketStore = create<Store>() (set => ({
    messages: [],
    addMessage: (message) => { 
        set((state) => ({ 
            messages: [
                ...state.messages, message
            ] 
        })) 
    }
})) 