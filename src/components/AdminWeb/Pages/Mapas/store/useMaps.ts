import { create } from "zustand";
import { Map } from "../types/Map";

interface StoreUseMaps {
    maps: Map[]
    selectedMap: Map | undefined,
    setMaps: (newMaps: Map[]) => void,
    setSelectedMap: (newSelectedMap: Map) => void
}

export const useMaps = create<StoreUseMaps>()((set) => ({
    maps: [],
    selectedMap: undefined,

    setMaps: (newMaps) => {
        set(({
            maps: newMaps
        }))
    },

    setSelectedMap: (newSelectedMap) => {
        set(({
            selectedMap: newSelectedMap
        }))
    }

}))