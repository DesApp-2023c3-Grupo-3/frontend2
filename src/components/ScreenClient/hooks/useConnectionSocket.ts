import { useEffect, useState } from 'react';
import { initializeSocketConnection } from '../services/webSocketConection';
import { Message } from '../mocks/imagenes';
import { useConnectionMessage } from '../store/useConnectionMessage';
import { useAdvertisingMessages } from '../store/useAdvertisingMessages';
import { useCourseMessages } from '../store/useCourseMessage';
import { useNavigate } from 'react-router-dom'

const ACTION_MESSAGE = {
  CREATE_COURSE: 'CREATE_COURSES',
  CREATE_ADVERTISING: 'CREATE_ADVERTISING',
  START_CONNECTION: 'START_CONNECTION',
  UPDATE_SCREEN_CONFIGURATION: 'UPDATE_SCREEN_CONFIGURATION',
  UPDATE_ADVERTISING: 'ADVERTISING_UPDATE',
  DELETE_ADVERTISING: 'ADVERTISING_DELETE',
  END_CONNECTION: 'SCREEN_CONNECTION_CLOSURE'
}

export function useConnectionSocket(screenId: number) {
  const [socketConnection, setSocketConnection] = useState<any>();
  const [error, setError] = useState<Error>();
  const navigate = useNavigate()
  
  const setConnection = useConnectionMessage(state => state.setConnection)

  const [addAdvertisingMessage, updateAdvertising, deleteAdvertising] = useAdvertisingMessages(state => 
    [state.addAdvertisingMessage, state.updateAdvertising, state.deleteAdvertising])

  const addCourseMessages = useCourseMessages(state => state.addCourseMessages)

  const finishConnection = () => {
    navigate('/')
  }

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
        addCourseMessages(newMessage.data)
        break
      case ACTION_MESSAGE.UPDATE_SCREEN_CONFIGURATION:
        setConnection(newMessage.data)
        break
      case ACTION_MESSAGE.UPDATE_ADVERTISING:
        updateAdvertising(newMessage.data)
        break
      case ACTION_MESSAGE.DELETE_ADVERTISING:
        deleteAdvertising(newMessage.data)
        break
      case ACTION_MESSAGE.END_CONNECTION:
        finishConnection()
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
