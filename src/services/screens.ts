import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

interface ScreenData {
    id:number,
    templeteId: string,
    subscription: string,
    courseIntervalTime: number,
    advertisingIntervalTime: number,
    sector: {
        id: number
    }
}

export const screenAPI = {
    getAll: () => {
        return axios.get(ROUTES_RELATIVE.screen.getAll);
    },
    edit: (screenData:ScreenData[]) => {
        return axios.patch(ROUTES_RELATIVE.screen.update, screenData);
    }
}