import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import { dataConfig } from './auth.guard';

export const advertisingsAPI = {
    getAll: function(rolId: number){
        return axios.get(`${ROUTES_RELATIVE.advertising.advertising}/role/${rolId}`, dataConfig)
    },
    getId: function(id : number) {
        return axios.get(`${ROUTES_RELATIVE.advertising.advertising}/${id}`, dataConfig)
    },
    create: function(advertisingData : any) {
        return axios.post(ROUTES_RELATIVE.advertising.advertising, advertisingData, dataConfig);
    },
    edit: function(id : number, advertising : any) {
        return axios.patch(`${ROUTES_RELATIVE.advertising.advertising}/${id}`, advertising, dataConfig)
    },
    delete: function(id:number) {
        return axios.delete(`${ROUTES_RELATIVE.advertising.advertising}/${id}`, dataConfig)
    }
}
