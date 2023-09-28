const HOST = process.env.REACT_APP_WEBSOCKET_HOST  || 'localhost';
const PORT = process.env.REACT_APP_WEBSOCKET_PORT|| 1234;

export const initializeSocketConnection = async (
  onMessageAction: any,
): Promise<WebSocket> => {
  try {
    const wsUrl = `ws://${HOST}:${PORT}`;
    const ws = new WebSocket(wsUrl);

    ws.addEventListener('open', () => {
      console.log(`WebSocket Connected ${wsUrl}`);
      ws.send(
        JSON.stringify({
          sectorId: 1,
          message: 'Hi! This is a client',
        }),
      );
    });

    ws.addEventListener('message', (message) => {
      console.info('message', message)
      onMessageAction(JSON.parse(message.data));
    });

    ws.addEventListener('error', (error) => {
      console.log(`ERROR: ${error}`);
    });

    return ws;
  } catch (error) {
    console.error('NATS Connection ERROR: ', error);
    throw error;
  }
};
