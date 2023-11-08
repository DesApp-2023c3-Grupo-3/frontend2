import { create } from "zustand";
import { filterMessages, theyAreEqual } from "../utils/arrays";
import { messages } from "../mocks/imagenes";
import { isActiveMessage } from "../utils/hour";
import { fetchAdvertisings } from "../services/fetchAdvertisings";

export interface DataAdvertising {
    advertisingTypeId: number;
    advertisingId: number;
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
    emptyAdvertisingsMessages: () => void
}; 
  
export const useAdvertisingMessages = create<StoreAdvertising>()((set, get) => ({
    advertisingMessages: INITIAL_ADVERTISING,
    avalaibleAdvertisingMessages: [],
    error: '',

    emptyAdvertisingsMessages: () => {
      set({
        advertisingMessages: []
      })
    },

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
       
        console.log(theyAreEqual(newAvailableMessages, get().avalaibleAdvertisingMessages))

        if(!theyAreEqual(newAvailableMessages, get().avalaibleAdvertisingMessages)) {
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
      if(get().advertisingMessages.length === 0) {
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
      }
    },

    updateAdvertising: (newMessage:DataAdvertising) => {
      const advertisingMessagesFiltered = get().advertisingMessages.filter(message => message.advertisingId !== newMessage.advertisingId)
      
      set({
        advertisingMessages: [...advertisingMessagesFiltered, newMessage]
      })
    },

    deleteAdvertising: (newMessage:DataAdvertising) => {
      const advertisingMessagesFiltered = get().advertisingMessages.filter(message => message.advertisingId !== newMessage.advertisingId)

      set({
        advertisingMessages: advertisingMessagesFiltered
      })

      console.log(get().advertisingMessages)
      console.log(get().avalaibleAdvertisingMessages)
    }

}));
