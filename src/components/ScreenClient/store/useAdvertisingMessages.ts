import { create } from "zustand";
import { filterMessages } from "../utils/arrays";
import { messages } from "../mocks/imagenes";
import { isActiveMessage } from "../utils/hour";

export interface DataAdvertising {
    advertisingTypeId: number;
    id: number;
    payload: string;
    startHour: string,
    endHour: string
}

const INITIAL_ADVERTISING: DataAdvertising[] = filterMessages(messages, 'CREATE_ADVERTISING');

type StoreAdvertising = {
    advertisingMessages: DataAdvertising[],
    avalaibleAdvertisingMessages: DataAdvertising[]
    addAdvertisingMessage: (message: DataAdvertising) => void
    addAdvertisingMessages: (message: DataAdvertising[]) => void
    addAvalaibleAdvertisingMessage: () => void
};
  
export const useAdvertisingMessages = create<StoreAdvertising>()((set, get) => ({
    advertisingMessages: INITIAL_ADVERTISING,
    avalaibleAdvertisingMessages: [],

    addAdvertisingMessage: (message: DataAdvertising) => {
      set((state) => ({
        advertisingMessages: [...state.advertisingMessages, message],
      }));
    },

    addAdvertisingMessages: (messages: DataAdvertising[]) => {
      set((state) => ({
        advertisingMessages: [...state.advertisingMessages, ...messages],
      }));
    },

    addAvalaibleAdvertisingMessage: () => {
      setInterval(() => {
        const newAvailableMessages = get().advertisingMessages.filter(message => isActiveMessage({ 
          startHour: message.startHour,
          endHour: message.endHour
        }))
        
        if(JSON.stringify(newAvailableMessages) !== JSON.stringify(get().avalaibleAdvertisingMessages)) {
              set(({
                avalaibleAdvertisingMessages: newAvailableMessages
              }))
        }
      }, 1000)
    },

}));
