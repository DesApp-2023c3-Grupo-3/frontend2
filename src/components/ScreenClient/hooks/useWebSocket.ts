import { useEffect, useState } from "react";
import { initializeSocketConnection } from "../services/webSocketConection";
import { webSocketStore } from "../store/webSocketStore";

export function useWebSocket() {
    const [natsConnection,  setNatsConnection] = useState<any>();
    const [error, setError] = useState<any>();
    const [
       courseMessages, 
       advertisingMessages,
       addMessage, 
    ] = webSocketStore(state => [
      state.courseMessages,
      state.advertisingMessages,
      state.addMessage
    ])

    const handlerOnMessage = (message: any) => {
      addMessage(message)
    };
  
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