import { create } from "zustand";

const screensMock = [
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Malvinas Argentinas',
      typeScreen: 1,
      isSelected: false,
      id: 1
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Malvinas Argentinas',
      typeScreen: 1,
      isSelected: false,
      id: 2
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Malvinas Argentinas',
      typeScreen: 1,
      isSelected: false,
      id: 3
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Malvinas Argentinas',
      typeScreen: 1,
      isSelected: false,
      id: 4
    },
  
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Malvinas Argentinas',
      typeScreen: 1,
      isSelected: false,
      id: 5
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Malvinas Argentinas',
      typeScreen: 1,
      isSelected: false,
      id: 6
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Malvinas Argentinas',
      typeScreen: 1,
      isSelected: false,
      id: 7
    },
  
  
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Malvinas Argentinas',
      typeScreen: 1,
      isSelected: false,
      id: 8
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Malvinas Argentinas',
      typeScreen: 1,
      isSelected: false,
      id: 9
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Malvinas Argentinas',
      typeScreen: 1,
      isSelected: false,
      id: 10
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Sector 3',
      typeScreen: 1,
      isSelected: false,
      id: 11
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Sector 3',
      typeScreen: 1,
      isSelected: false,
      id: 12
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Sector 3',
      typeScreen: 1,
      isSelected: false,
      id: 13
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Sector 3',
      typeScreen: 1,
      isSelected: false,
      id: 14
    },
    {
      screenTitle: 'Pantalla 1',
      sectorTitle: 'Sector 3',
      typeScreen: 1,
      isSelected: false,
      id: 15
    },
  
  ];

interface Screen {
    screenTitle: string, 
    sectorTitle: string,
    typeScreen: number,
    isSelected: boolean,
    id:number
}

interface StoreScreen {
    screens: Screen[]
    selectAllTheScreens: () => void
    deselectAllTheScreens: () => void
    selectScreen: (id:number) => void
}

export const useScreens = create<StoreScreen>()((set, get) => ({
    screens: screensMock,

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