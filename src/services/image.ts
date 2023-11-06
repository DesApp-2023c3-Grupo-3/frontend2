import axios from "axios";
import { instance } from "./base.api.url";
import { ROUTES_RELATIVE } from "../routes/route.relatives";

const endpoint = "image"

export const imageAPI = {
    viewId: function(id : number) {
        return instance.get(`${endpoint}/${id}/view`)
    },
    create: function(image : any) {
        return instance.post(endpoint, image, {
            headers: {
                "Content-Type": 'multipart/form-data'
              }
        })
    },
    viewQr: function() {
        return axios.get(ROUTES_RELATIVE.planeViewQr, {
            responseType: 'arraybuffer', 
          })
    },
}