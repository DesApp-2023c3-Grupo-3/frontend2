import { create } from "zustand";

interface StoreUseFilters {
    isSelectedAll: boolean,
    sector: string,
    setIsSelectedAll: (newState: boolean) => void
    setSector: (newSector: string) => void
}

export const useFilters = create<StoreUseFilters>()((set) => ({
    isSelectedAll: false,
    sector: "Todos",

    setIsSelectedAll: (newState: boolean) => {
        set(({
            isSelectedAll: newState
        }))
    },

    setSector: (newSector: string) => {
        set(({
            sector: newSector
        }))
    } 

}))