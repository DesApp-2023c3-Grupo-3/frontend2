import { useEffect, useState } from 'react';
import { initializeSocketConnection } from '../services/webSocketConection';
import { Message, useSocketStore } from '../store/socketStore';

export function useConnectionSocket(screenId: number) {
    const [socketConnection,  setSocketConnection] = useState<any>()
    const [error, setError] = useState<Error>()

  const addMessage = useSocketStore((state) => state.addMessage);

    const handlerOnMessage = (message: Message) => {
      addMessage(message)
    }
  
    useEffect(() => {
      initializeSocketConnection(screenId, handlerOnMessage)
        .then((connection) => {
          setSocketConnection(connection);
        })
        .catch((error) => {
          setError(error);
        });
    }, [])

    return { socketConnection, error }
}
