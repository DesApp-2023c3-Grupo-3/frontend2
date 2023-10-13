import { create } from 'zustand';

const INITIAL_CONNECTION_STATE = {
  screen: {
    id: 1,
    subscription: "default",
    templeteId: "1",
    courseIntervalTime: 15,
    advertisingIntervalTime: 15,
    createdAt: "2023-10-12T21:27:21.230Z",
    updatedAt: "2023-10-12T21:27:21.230Z", 
    deletedAt: "null",
    sector: {
      id: 1,
      name: "Edificio Malvinas",
      topic: "Materias",
      createdAt: "2023-10-12T21:29:59.661Z",
      updatedAt: "2023-10-12T21:29:59.661Z",
      deletedAt: "null"
    }
  },
  sector: {
    id: 1,
    name: "Edificio Malvinas",
    topic: "Materias",
    createdAt: "2023-10-12T21:29:59.661Z",
    updatedAt: "2023-10-12T21:29:59.661Z",
    deletedAt: "null"
  },
  topic: "default",
  id: 1
};

interface ScreenConnection {
  id: number;
  subscription: string;
  templeteId: string;
  courseIntervalTime: number;
  advertisingIntervalTime: number;
  sector: SectorScreen;
  createdAt: string;
  updatedAt: string; 
  deletedAt: string;
}

interface DataConnection {
  screen: ScreenConnection,
  sector: SectorConnection,
  id: number,
  topic: string
}

interface SectorConnection {
  createdAt: string,
  deletedAt: string,
  id: number,
  name:string,
  topic:string,
  updatedAt: string,
}

interface SectorScreen {
  id: number,
  name: string,
  topic: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string
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
    },

}))