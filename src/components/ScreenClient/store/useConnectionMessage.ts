import { create } from 'zustand';

const INITIAL_CONNECTION_STATE = {
    subscription: 'default',
    templeteId: '1',
    courseIntervalTime: 15,
    advertisingIntervalTime: 15,
    sector: 1,
}

interface DataConnection {
    subscription: string,
    templeteId: string,
    courseIntervalTime: number,
    advertisingIntervalTime: number,
    sector: number,
}

type StoreConnection = {
    connectionMessage: DataConnection
    setConnection: (connection: DataConnection) => void
};

export const useConnectionMessage = create<StoreConnection>()(set => ({
    connectionMessage: INITIAL_CONNECTION_STATE,
  
    setConnection: (connection: DataConnection) => {
      set(({
        connectionMessage: connection
      }))
    }
}))