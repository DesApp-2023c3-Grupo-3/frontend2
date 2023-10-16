import { useEffect, useState } from 'react';
import { initializeSocketConnection } from '../services/webSocketConection';
import { Message } from '../mocks/imagenes';
import { useConnectionMessage } from '../store/useConnectionMessage';
import { useAdvertisingMessages } from '../store/useAdvertisingMessages';
import { useCourseMessages } from '../store/useCourseMessage';

const ACTION_MESSAGE = {
  CREATE_COURSE: 'CREATE_COURSE',
  CREATE_ADVERTISING: 'CREATE_ADVERTISING',
  START_CONNECTION: 'START_CONNECTION'
}

export function useConnectionSocket(screenId: number) {
  const [socketConnection, setSocketConnection] = useState<any>();
  const [error, setError] = useState<Error>();
  
  const setConnection = useConnectionMessage(state => state.setConnection)
  const addAdvertisingMessage = useAdvertisingMessages(state => state.addAdvertisingMessage)
  const addCourseMessage = useCourseMessages(state => state.addCourseMessage)

  const handlerOnMessage = (message: Message) => {
    const newMessage = message.data

    switch(newMessage.action) {
      case ACTION_MESSAGE.START_CONNECTION:
        setConnection(newMessage.data)
        break
      case ACTION_MESSAGE.CREATE_ADVERTISING: 
        addAdvertisingMessage(newMessage.data)
        break
      case ACTION_MESSAGE.CREATE_COURSE:
        addCourseMessage(newMessage.data)
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
