import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import { getHeaders, handleCall } from './validationMiddleware';

export const advertisingsAPI = {
    getAll: function(rolId: number){
        return handleCall(axios.get, [`${ROUTES_RELATIVE.advertising.advertising}/role/${rolId}`], getHeaders)
    },
    getId: function(id : number) {
        return handleCall(axios.get, [`${ROUTES_RELATIVE.advertising.advertising}/${id}`], getHeaders)
    },
    create: function(advertisingData : any) {
        return handleCall(axios.post, [ROUTES_RELATIVE.advertising.advertising, advertisingData], getHeaders);
    },
    edit: function(id : number, advertising : any) {
        return handleCall(axios.patch, [`${ROUTES_RELATIVE.advertising.advertising}/${id}`, advertising], getHeaders)
    },
    delete: function(id:number) {
        return handleCall(axios.delete, [`${ROUTES_RELATIVE.advertising.advertising}/${id}`], getHeaders)
    }
}
