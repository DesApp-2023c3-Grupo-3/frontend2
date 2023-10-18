import { instance } from "./base.api.url";

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
    }
}