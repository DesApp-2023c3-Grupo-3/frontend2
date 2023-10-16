import { instance } from "./base.api.url";

const endpoint = "advertising"

export const asAdvertisings = {
    getAll: function(){
        return instance.get(`${endpoint}/role/1`)
    },
    create: function(advertisingData : any) {
        return instance.post(endpoint, advertisingData);
    }
}
