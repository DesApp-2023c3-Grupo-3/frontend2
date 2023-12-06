import { create } from "zustand";
import { persist } from "zustand/middleware"
interface ScreenStore {
    screenId: number,
    setScreenId: (newScreenId: number) => void
}

export const useScreen = create<ScreenStore>()(persist((set)=> ({
    screenId: 0,

    setScreenId: (newScreenId:number) => {
        set({
            screenId: newScreenId
        })
    },

}), {
    name: "screenId"
}))