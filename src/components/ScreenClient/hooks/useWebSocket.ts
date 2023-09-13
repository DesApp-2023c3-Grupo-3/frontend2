import { useEffect, useState } from "react";
import { initializeSocketConnection } from "../services/webSocketConection";

export function useWebSocket() {
    const [natsConnection,  setNatsConnection] = useState<any>();
    const [error, setError] = useState<any>();
    const [messages, setMessages] = useState<any[]>([]);
  
    const handlerOnMessage = (message: any) => {
      // TODO: Algunos mensajes no se mapean idk why, Fixear
      setMessages([...messages, message]);
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

    return { natsConnection, error, messages }
}