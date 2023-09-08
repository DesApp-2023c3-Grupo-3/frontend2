import { useEffect, useState } from 'react';

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
    <main className='grid grid-cols-12 gap-1 bg-[#D9D9D9] h-screen'>
      <section className='col-start-1 col-end-4 flex flex-col gap-1'>
        <article className='h-2/4 bg-white'>
          aaaaa
        </article>
        <article className='h-2/4 bg-white rounded-tr-xl'>
          aaaaaa
        </article>
      </section>
      <section className='col-start-4 col-end-13'>
        <article className='bg-white h-full'>
          aaaaaa
        </article>
      </section>
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
