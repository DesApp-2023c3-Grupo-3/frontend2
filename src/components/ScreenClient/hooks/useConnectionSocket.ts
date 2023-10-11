import { useEffect, useState } from 'react';
import { initializeSocketConnection } from '../services/webSocketConection';
import { Message, useSocketStore } from '../store/socketStore';

export function useConnectionSocket(screenId: number) {
<<<<<<< HEAD
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
=======
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
>>>>>>> bf0eaf89fe6b36e069738dd71e654d7d788b4230
    }, [])

    return { socketConnection, error }
}
