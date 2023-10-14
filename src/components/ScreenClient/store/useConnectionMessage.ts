import { create } from 'zustand';

const INITIAL_CONNECTION_STATE = {
  screen: {
    id: -1,
    subscription: "",
    templeteId: "",
    courseIntervalTime: 0,
    advertisingIntervalTime: 0,
    createdAt: "",
    updatedAt: "", 
    deletedAt: "",
    sector: {
      id: -1,
      name: "",
      topic: "",
      createdAt: "",
      updatedAt: "",
      deletedAt: ""
    }
  },
  sector: {
    id: -1,
    name: "",
    topic: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: ""
  },
  action: "",
  id: -1
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
  action: string
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
