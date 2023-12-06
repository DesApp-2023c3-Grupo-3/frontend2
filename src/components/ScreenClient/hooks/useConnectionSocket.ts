import { useEffect, useState } from 'react';
import { initializeSocketConnection } from '../services/webSocketConection';
import { Message } from '../mocks/imagenes';
import { useConnectionMessage } from '../store/useConnectionMessage';
import { useAdvertisingMessages } from '../store/useAdvertisingMessages';
import { useCourseMessages } from '../store/useCourseMessage';
import { useNavigate } from 'react-router-dom'

const ACTION_MESSAGE = {
  START_CONNECTION: 'START_CONNECTION',
  UPDATE_SCREEN_CONFIGURATION: 'UPDATE_SCREEN_CONFIGURATION',
  SCREEN_REMOTE_DISCONNECT: 'SCREEN_REMOTE_DISCONNECT',
  CREATE_ADVERTISING: 'CREATE_ADVERTISING',
  UPDATE_ADVERTISING: 'UPDATE_ADVERTISING',
  DELETE_ADVERTISING: 'DELETE_ADVERTISING',
  CREATE_COURSE: 'CREATE_COURSES',
}

export function useConnectionSocket(screenId: number) {
  const [socketConnection, setSocketConnection] = useState<any>();
  const [error, setError] = useState<Error>();
  const navigate = useNavigate()
  const [setConnection, connection] = useConnectionMessage(state => [state.setConnection, state.connectionMessage])

  const [addAdvertisingMessage, updateAdvertising, deleteAdvertising] = useAdvertisingMessages(state => 
    [state.addAdvertisingMessage, state.updateAdvertising, state.deleteAdvertising])

  const addCourseMessages = useCourseMessages(state => state.addCourseMessages)

  const finishConnection = () => {
    navigate('/')
  }

  const generateSocketConnection = () => {
      initializeSocketConnection(screenId, handlerOnMessage)
      .then((connection) => {
          setSocketConnection(connection);
      })
      .catch((error) => {
        setError(error);
      });
  }

  const handlerOnMessage = (message: Message) => {
    const newMessage = message.data

    switch(newMessage.action) {
      case ACTION_MESSAGE.START_CONNECTION:
        setConnection(newMessage.data, generateSocketConnection)
        break
      case ACTION_MESSAGE.CREATE_ADVERTISING: 
        addAdvertisingMessage(newMessage.data)
        break
      case ACTION_MESSAGE.CREATE_COURSE:
        addCourseMessages(newMessage.data)
        break
      case ACTION_MESSAGE.UPDATE_SCREEN_CONFIGURATION:
        setConnection(newMessage.data, generateSocketConnection)
        break
      case ACTION_MESSAGE.UPDATE_ADVERTISING:
        updateAdvertising(newMessage.data)
        break
      case ACTION_MESSAGE.DELETE_ADVERTISING:
        deleteAdvertising(newMessage.data)
        break
      case ACTION_MESSAGE.SCREEN_REMOTE_DISCONNECT:
        finishConnection()
        break
    }
  };

  useEffect(() => {
    generateSocketConnection()
  }, [screenId]);

  return { socketConnection, error, setSocketConnection };
}
