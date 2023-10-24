import { instance } from "./base.api.url";

interface ScreenData {
    templeteId: string,
    subscription: string,
    courseIntervalTime: number,
    advertisingIntervalTime: number,
    sector: {
        id: number
    }
}

const endpoint = "screen"

export const screenAPI = {
    getAll: () => {
        return instance.get(endpoint)
    },
    edit: (id:number,screenData:ScreenData) => {
        return instance.patch(`${endpoint}/${id}`, screenData)
    }
}