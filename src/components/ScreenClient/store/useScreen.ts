import { create } from 'zustand';

interface ScreenStore {
  screenId: number;
  setScreenId: (newScreenId: number) => void;
}

export const useScreen = create<ScreenStore>()((set, get) => ({
  screenId: 0,

  setScreenId: (newScreenId: number) => {
    set({
      screenId: newScreenId,
    });
  },
}));
