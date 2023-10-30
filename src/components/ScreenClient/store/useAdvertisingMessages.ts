import { create } from "zustand";
import { filterMessages } from "../utils/arrays";
import { messages } from "../mocks/imagenes";
import { isActiveMessage } from "../utils/hour";
import { fetchAdvertisings } from "../services/fetchAdvertisings";

export interface DataAdvertising {
    advertisingTypeId: number;
    id: number;
    payload: string;
    startHour: string,
    endHour: string
}

const INITIAL_ADVERTISING: DataAdvertising[] = filterMessages(messages, 'CREATE_ADVERTISING');

type StoreAdvertising = {
    advertisingMessages: DataAdvertising[]
    avalaibleAdvertisingMessages: DataAdvertising[]
    error: string
    addAdvertisingMessage: (message: DataAdvertising) => void
    addAdvertisingMessages: (message: DataAdvertising[]) => void
    addAvalaibleAdvertisingMessage: () => void
    setError: (error:string) => void
    fetchAdvertisingsByScreenId: (screenId:number) => void
    updateAdvertising: (message: DataAdvertising) => void
    deleteAdvertising: (message: DataAdvertising) => void
}; 
  
export const useAdvertisingMessages = create<StoreAdvertising>()((set, get) => ({
    advertisingMessages: INITIAL_ADVERTISING,
    avalaibleAdvertisingMessages: [],
    error: '',

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
        const newAvailableMessages = get().advertisingMessages.filter(message => isActiveMessage({ 
          startHour: message.startHour,
          endHour: message.endHour
        }))
       
        if(JSON.stringify(newAvailableMessages) !== JSON.stringify(get().avalaibleAdvertisingMessages)) {
              set(({
                avalaibleAdvertisingMessages: newAvailableMessages
              }))
        }
    },

    setError: (error:string) => {
      set(({
        error
      }))
    },

    fetchAdvertisingsByScreenId: (screenId:number) => {
      fetchAdvertisings(screenId)
      .then((advertisings) =>
        advertisings.map((advertising: any) => {
          const { id, payload, advertisingType, advertisingSchedules } =
            advertising;
            
          return {
            advertisingTypeId: advertisingType['id'],
            advertisingId: id,
            payload,
            startHour: advertisingSchedules[0]['schedule']['startHour'],
            endHour: advertisingSchedules[0]['schedule']['endHour'],
          };
        }),
      )
      .then((advertisings) => get().addAdvertisingMessages(advertisings))
      .catch((error:Error) => get().setError(error.message))
    },

    updateAdvertising: (newMessage:DataAdvertising) => {
      const advertisingMessagesFiltered = get().advertisingMessages.filter(message => message.id !== newMessage.id)

      set({
        advertisingMessages: [...advertisingMessagesFiltered, newMessage]
      })
    },

    deleteAdvertising: (newMessage:DataAdvertising) => {
      const advertisingMessagesFiltered = get().advertisingMessages.filter(message => message.id !== newMessage.id)

      set({
        advertisingMessages: advertisingMessagesFiltered
      })
    }

}));
