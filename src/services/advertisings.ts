import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const advertisingsAPI = {
    getAll: function(rolId: number){
        return axios.get(`${ROUTES_RELATIVE.advertising.advertising}/role/${rolId}`)
    },
    getId: function(id : number) {
        return axios.get(`${ROUTES_RELATIVE.advertising.advertising}/${id}`)
    },
    create: function(advertisingData : any) {
        return axios.post(ROUTES_RELATIVE.advertising.advertising, advertisingData);
    },
    edit: function(id : number, advertising : any) {
        return axios.patch(`${ROUTES_RELATIVE.advertising.advertising}/${id}`, advertising)
    },
    delete: function(id:number) {
        return axios.delete(`${ROUTES_RELATIVE.advertising.advertising}/${id}`)
    }
}
