const HOST = process.env.REACT_APP_WEBSOCKET_HOST  || window.location.hostname;
const PORT = process.env.REACT_APP_WEBSOCKET_PORT|| window.location.port;

export const initializeSocketConnection = async (screenId: number, onMessageAction: any): Promise<WebSocket> => {
    try {
      const wsUrl = `ws://${HOST}:${PORT}/messaging`;
      const ws = new WebSocket(wsUrl)
  
      ws.addEventListener('open', () => {
        console.log(`WebSocket Connected ${wsUrl}`);
        ws.send(JSON.stringify({
          sectorId: screenId,
          message: 'Hi! This is a client'
        }));
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
