import { useEffect, useState } from 'react';
import Informacion from './Informacion';
import Comisiones from './Comisiones';

const HOST = 'localhost';
const PORT = 1235;

const initializeSocketConnection = async (onMessageAction: any): Promise<WebSocket> => {
  try {
    const wsUrl = `ws://${HOST}:${PORT}`;
    const ws = new WebSocket(wsUrl)

    ws.addEventListener('open', () => {
      console.log(`WebSocket Connected ${wsUrl}`);
      ws.send('Hi! This is a client');
    });
    
    ws.addEventListener('message', (message) => {
      onMessageAction(JSON.parse(message.data));
    });

    ws.addEventListener('error', (error) => {
      console.log(`ERROR: ${error}`)
    });

    return ws;
  } catch (error) {
    console.error('NATS Connection ERROR: ', error);
    throw error;
  }
}

function ScreenClient() {
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
        throw error;
      });
  }, [])

  return (
    <main>
      <Informacion />
      <Comisiones />
    </main>
  );
}

{/* <div>
<h1>ScreenClient</h1>
<h3>{natsConnection ? 'CONNECTED' : 'NOT CONNECTED'}</h3>
<h5>{`ws://${HOST}:${PORT}`}</h5>
  {messages.map((message: any) => <div key={message.id}>
  <h5>{message.data}</h5>
</div>)}
</div> */}


export default ScreenClient;
