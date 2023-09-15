import { Message } from "../../types"

export const filterMessages = (messages: Message [], topic:string) => {
    const advertisingMessages = messages.filter(message => message.topic === topic) 
    return advertisingMessages.map(message => message.data)
}