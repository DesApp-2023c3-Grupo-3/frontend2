// import './ScreenClient.css';
import {
  connect,
  NatsConnection
} from 'nats.ws';
// } from '../../../node_modules/nats.ws/lib/src/mod.js';
// } from 'nats';
import { useEffect, useState } from 'react';

const HOST = 'localhost';
const PORT = 4222;

const initializeNatsConnection = async (): Promise<NatsConnection> => {
  try {
    console.log('initialize NATS Connection');
    const connection = await connect({
      debug: true,
      pedantic: true,
      reconnect: true,
      servers: [`${HOST}:${PORT}`]
    });
    console.log('NATS Connection established');
    return connection;
  } catch (error) {
    console.error('NATS Connection ERROR: ', error);
    throw error;
  }
}

function ScreenClient() {
  const [natsConnection,  setNatsConnection] = useState<NatsConnection>();
  const [error, setError] = useState<NatsConnection>();

  useEffect(() => {
    initializeNatsConnection()
      .then((connection) => {
        setNatsConnection(connection);
      })
      .catch((error) => {
        setError(error);
        throw error;
      });
    // (async () => {
    //   console.log('initialize NATS Connection');
    //   const connection = await connect({ servers: [`wss://${HOST}:${PORT}`] });
    //   setNatsConnection(connection);
    //   console.log('NATS Connection established');
    // })()
    // 4
    // return () => {
    //   natsConnection?.drain();
    //   console.log("closed NATS connection")
    // }
  }, [])

  return (
    <div>
      <h1>ScreenClient</h1>
      <h3>{natsConnection ? 'CONNECTED' : 'NOT CONNECTED'}</h3>
      <h5>{`nats://${HOST}:${PORT}`}</h5>
    </div>
  );
}

export default ScreenClient;
