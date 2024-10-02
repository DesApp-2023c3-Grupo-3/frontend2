import axios from "axios";
import { ROUTES_RELATIVE } from "../routes/route.relatives";
import { handleCall, getHeaders } from "./validationMiddleware";
import keycloak from "./keycloak/keycloack";

export const imageAPI = {
    viewId: function(id : number) {
        return handleCall(axios.get, [`${ROUTES_RELATIVE.image}/${id}/view`])
    },
    create: async function(image : any) {
        try {
            try {
                return axios.post(ROUTES_RELATIVE.image.image, image, {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                        "Authorization": `Bearer ${keycloak.token}`
                }
            })} catch {
                return axios.post(ROUTES_RELATIVE.image.image, image, {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                        "Authorization": `Bearer ${keycloak.token}`
                    }
                })
            }
        } catch (error) {
            console.error("Refresh Token Error:", error);
        }
        
    },
    viewQr: function() {
        return axios.get(ROUTES_RELATIVE.image.planeViewQr, {
            responseType: 'arraybuffer',
            headers: getHeaders().headers
          })
    },
}
