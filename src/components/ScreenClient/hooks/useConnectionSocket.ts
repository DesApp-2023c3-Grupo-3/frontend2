import { useEffect, useState } from 'react';
import { initializeSocketConnection } from '../services/webSocketConection';
import { Message } from '../mocks/imagenes';
import { useConnectionMessage } from '../store/useConnectionMessage';
import { useAdvertisingMessages } from '../store/useAdvertisingMessages';
import { useCourseMessages } from '../store/useCourseMessage';

export function useConnectionSocket(screenId: number) {
  const [socketConnection, setSocketConnection] = useState<any>();
  const [error, setError] = useState<Error>();
  const setConnection = useConnectionMessage(state => state.setConnection)
  const addAdvertisingMessage = useAdvertisingMessages(state => state.addAdvertisingMessage)
  const addCourseMessage = useCourseMessages(state => state.addCourseMessage)

  const handlerOnMessage = (message: Message) => {
    switch(message.topic) {
      case 'connection':
        setConnection(message.data)
        break
      case 'advertising': 
        addAdvertisingMessage(message.data)
        break
      case 'course':
        addCourseMessage(message.data)
        break
    }
  };

  useEffect(() => {
    initializeSocketConnection(screenId, handlerOnMessage)
      .then((connection) => {
        setSocketConnection(connection);
      })
      .catch((error) => {
        setError(error);
      });
  }, [screenId]);

  return { socketConnection, error };
}
