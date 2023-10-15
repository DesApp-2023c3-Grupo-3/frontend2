import { create } from "zustand";

interface ScreenIdStore {
    screenId: number,
    setScreenId: (newScreenId: number) => void
}

export const useScreenId = create<ScreenIdStore>()(set => ({
    screenId: 0,

    setScreenId: (newScreenId:number) => {
        set({
            screenId: newScreenId
        })
    }
}))