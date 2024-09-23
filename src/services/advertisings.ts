import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import { handleCall } from './validationMiddleware';

export const advertisingsAPI = {
    getAll: function(){
        return handleCall(axios.get, [`${ROUTES_RELATIVE.advertising.advertising}`])
    },
    getId: function(id : number) {
        return handleCall(axios.get, [`${ROUTES_RELATIVE.advertising.advertising}/${id}`])
    },
    create: function(advertisingData : any) {
        return handleCall(axios.post, [ROUTES_RELATIVE.advertising.advertising, advertisingData]);
    },
    edit: function(id : number, advertising : any) {
        return handleCall(axios.patch, [`${ROUTES_RELATIVE.advertising.advertising}/${id}`, advertising])
    },
    delete: function(id:number) {
        return handleCall(axios.delete, [`${ROUTES_RELATIVE.advertising.advertising}/${id}`])
    },
    getPaginated: function(page: number, limit: number, find = "") {
        if (find === "") {
            return handleCall(axios.get, [
                `${ROUTES_RELATIVE.advertising.advertising}/all?page=${page}&limit=${limit}`
            ]);
        } else {
            return handleCall(axios.get, [
                `${ROUTES_RELATIVE.advertising.advertising}/all?page=${page}&limit=${limit}&search=${find}`
            ]);
        }
        
    }
}
