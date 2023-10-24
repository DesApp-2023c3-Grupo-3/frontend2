import { create } from "zustand";
import { screensMock } from "../mocks/screens";

export interface Screen {
    id: number
    screenTitle: string, 
    sectorTitle: string,
    typeScreen: string,
    suscription: string,
    isSelected: boolean,
    sectorId: number
}

interface StoreScreen {
    screens: Screen[]
    selectAllTheScreens: () => void
    deselectAllTheScreens: () => void
    selectScreen: (id:number) => void
}

export const useScreens = create<StoreScreen>()((set, get) => ({
    screens: [],

    setScreens: (newScreens:Screen[]) => {
        
    },

    selectAllTheScreens: () => {
        const newScreens = get().screens.map(screen => {
            screen.isSelected = true
            return screen
        })
        set({
            screens: newScreens
        })
    }, 

    deselectAllTheScreens: () => {
        const newScreens = get().screens.map(screen => {
            screen.isSelected = false
            return screen
        })
        set({
            screens: newScreens
        })
    },

    
    selectScreen : (id:number) => {
        const newScreens = get().screens.map(screen => {
            const screenAux = screen
            if(screenAux.id === id) {
                screenAux.isSelected = !screenAux.isSelected 
            }
            return screenAux     
        })
        set({
            screens: newScreens
        })
    }
    
}))