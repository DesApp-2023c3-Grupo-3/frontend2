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
    addMessage: (message:Message) => void,
    deleteMessage: (id: number) => void 
}