import { create } from "zustand";

type Data = {
    advertisingTypeId: number,
    id: number,
    payload: string,
    title: string
}

type Message = {
    topic: string,
    id: number,
    data: Data 
}

type Store = {
    messages: Message [],
    advertisingMessages: Message [],
    courseMessages: Message [],
    addMessage: (message:Message) => void
}

const filterMessages = (messages: Message [], topic:string) => {
    return messages?.filter(message => message.topic === topic) ?? []
}

export const webSocketStore = create<Store>() ((set, get) => ({
    messages: [],
    advertisingMessages: filterMessages(get()?.messages, "advertising"),
    courseMessages: filterMessages(get()?.messages, "course"),

    addMessage: (message) => { 
        set((state) => ({ 
            messages: [
                ...state.messages, message
            ] 
        })) 
    }
})) 