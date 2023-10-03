import { create } from 'zustand';
import { messages } from '../mocks/imagenes';
import { filterMessages } from '../utils/arrays';

export interface Message {
  topic: string;
  id: number;
  data: any;
}

export interface DataAdvertising {
  advertisingTypeId: number;
  id: number;
  payload: string;
  title: string;
}

export interface DataCourse {
  id: number;
  subject: string;
  title: string;
  classroom: string;
  schedule: string;
}

export type Store = {
  messages: Message[];
  getAdvertisingMessages: () => any[];
  getCoursesMessages: () => any[];
  addMessage: (message: Message) => void;
  deleteMessage: (id: number) => void;
};

const INITIAL_STATE: Message[] = messages;

const TYPE_MESSAGES = {
  advertising: 'advertising',
  courses: 'course',
  connection: 'connection',
};

export const useSocketStore = create<Store>()((set, get) => ({
  messages: INITIAL_STATE,
  getAdvertisingMessages: () =>
    filterMessages(get().messages, TYPE_MESSAGES.advertising),
  getCoursesMessages: () =>
    filterMessages(get().messages, TYPE_MESSAGES.courses),

  addMessage: (message) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },

  deleteMessage: (id) => {
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== id),
    }));
  },
}));
