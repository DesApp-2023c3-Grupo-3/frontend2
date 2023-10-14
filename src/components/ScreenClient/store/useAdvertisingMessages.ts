import { create } from "zustand";
import { filterMessages } from "../utils/arrays";
import { messages } from "../mocks/imagenes";

export interface DataAdvertising {
    advertisingTypeId: number;
    id: number;
    payload: string;
    title: string;
}

const INITIAL_ADVERTISING: DataAdvertising[] = filterMessages(messages, 'CREATE_ADVERTISING')

type StoreAdvertising = {
    advertisingMessages: DataAdvertising[]
    addAdvertisingMessage: (message: DataAdvertising) => void
};
  
export const useAdvertisingMessages = create<StoreAdvertising>()(set => ({
    advertisingMessages: INITIAL_ADVERTISING,
  
    addAdvertisingMessage: (message: DataAdvertising) => {
      set((state) => ({
        advertisingMessages: [...state.advertisingMessages, message],
      }));
    },
}))