import { useEffect, useState } from "react";
import { initializeSocketConnection } from "../services/webSocketConection";
import { Message, useSocketStore } from "../store/socketStore";

export function useConnectionSocket() {
    const [socketConnection,  setSocketConnection] = useState<any>()
    const [error, setError] = useState<any>()

    const addMessage = useSocketStore(state => state.addMessage)

    const handlerOnMessage = (message: Message) => {
      addMessage(message)
    }
  
    useEffect(() => {
      initializeSocketConnection(handlerOnMessage)
        .then((connection) => {
          setSocketConnection(connection);
        })
        .catch((error) => {
          setError(error);
        });
    }, [])

    return { socketConnection, error }
}