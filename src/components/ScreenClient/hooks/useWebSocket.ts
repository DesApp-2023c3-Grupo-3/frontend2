import { useEffect, useState } from "react";
import { initializeSocketConnection } from "../services/webSocketConection";
import { Message, webSocketStore } from "../store/webSocketStore";

const filterMessages = (messages: Message [], topic:string) => {
  const advertisingMessages = messages.filter(message => message.topic === topic) 
  return advertisingMessages.map(message => message.data)
}

const TYPE_MESSAGES = {
  advertising: "advertising",
  course: "course"
}

export function useWebSocket() {
    const [natsConnection,  setNatsConnection] = useState<any>()
    const [error, setError] = useState<any>()

    const [
       messages,
       addMessage, 
    ] = webSocketStore(state => [
      state.messages,
      state.addMessage
    ])

    const advertisingMessages = filterMessages(messages, TYPE_MESSAGES.advertising)
    const courseMessages = filterMessages(messages, TYPE_MESSAGES.course)

    const handlerOnMessage = (message: Message) => {
      addMessage(message)
    }
  
    useEffect(() => {
      initializeSocketConnection(handlerOnMessage)
        .then((connection) => {
          setNatsConnection(connection);
        })
        .catch((error) => {
          setError(error);
        });
    }, [])

    return { natsConnection, error, courseMessages, advertisingMessages }
}