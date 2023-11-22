import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import { getHeaders, handleCall } from './validationMiddleware';

interface ScreenData {
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
        return handleCall(axios.get, [ROUTES_RELATIVE.screen.getAll], getHeaders);
    },
    edit: (id:number, screenData:ScreenData) => {
        return handleCall(axios.patch, [`${ROUTES_RELATIVE.screen.update}/${id}`, screenData], getHeaders);
    }
}