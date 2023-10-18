import { instance } from "./base.api.url";

const endpoint = "advertising"

export const advertisingsAPI = {
    getAll: function(){
        return instance.get(`${endpoint}/role/1`)
    },
    getId: function(id : number) {
        return instance.get(`${endpoint}/${id}`)
    },
    create: function(advertisingData : any) {
        return instance.post(endpoint, advertisingData);
    },
    edit: function(id : number, advertising : any) {
        return instance.patch(`${endpoint}/${advertising.id}`, advertising)
    }
}
