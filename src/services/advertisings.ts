import { instance } from "./base.api.url";

const endpoint = "advertising"

export const advertisingsAPI = {
    getAll: function(rolId: number){
        return instance.get(`${endpoint}/role/${rolId}`)
    },
    getId: function(id : number) {
        return instance.get(`${endpoint}/${id}`)
    },
    create: function(advertisingData : any) {
        return instance.post(endpoint, advertisingData);
    },
    edit: function(id : number, advertising : any) {
        return instance.patch(`${endpoint}/${id}`, advertising)
    },
    delete: function(id:number) {
        return instance.delete(`${endpoint}/${id}`)
    }
}
