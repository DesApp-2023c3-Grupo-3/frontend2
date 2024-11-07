import { create } from "zustand";

export interface Screen {
    id: number
    screenTitle: string,
    sectorTitle: string,
    typeScreen: string,
    subscription: string,
    isSelected: boolean,
    advertisingIntervalTime: number
    courseIntervalTime: number
    sector: {
        id: number,
        topic: string,
        name: string
    }
}

interface StoreScreen {
    screens: Screen[]
    selectAllTheScreens: (screens: Screen[]) => void
    deselectAllTheScreens: () => void
    selectScreen: (id: number) => void
    addScreens: (screens: Screen[]) => void
}

export const useScreenFilters = create<StoreScreen>()((set, get) => ({
    screens: [],

    selectAllTheScreens: (selectedScreens: Screen[]) => {
        const newSelectedScreens = get().screens.map(screen => {
            if (selectedScreens.some(selectedScreen => selectedScreen.id === screen.id)) {
                screen.isSelected = true
            }
            return screen
        })
        set({
            screens: newSelectedScreens
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


    selectScreen: (id: number) => {
        const newScreens = get().screens.map(screen => {
            const screenAux = screen
            if (screenAux.id === id) {
                screenAux.isSelected = !screenAux.isSelected
            }
            return screenAux
        })
        set({
            screens: newScreens
        })
    },

    addScreens: (screens: Screen[]) => {
        set({
            screens
        })
    }

}))