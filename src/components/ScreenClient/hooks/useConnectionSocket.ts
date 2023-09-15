import { useEffect, useState } from "react";
import { initializeSocketConnection } from "../services/webSocketConection";
import { useSocketStore } from "../store/socketStore";
import { Message } from "../../types";

export function useConnectionSocket() {
    const [natsConnection,  setNatsConnection] = useState<any>()
    const [error, setError] = useState<any>()

    const addMessage = useSocketStore(state => state.addMessage)

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

    return { natsConnection, error }
}