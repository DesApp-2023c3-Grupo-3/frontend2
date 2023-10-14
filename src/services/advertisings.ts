import { instance } from "./base.api.url";

const endpoint = "advertising/role/1"

export const asAdvertisings = {
    getAll: function(){
        return instance.get(endpoint)
    }
}