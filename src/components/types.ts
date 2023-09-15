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

export type Store = {
    messages: Message [],
    getAdvertisingMessages: () => Data [],
    getCoursesMessages: () => Data [],
    addMessage: (message:Message) => void,
    deleteMessage: (id: number) => void,
}