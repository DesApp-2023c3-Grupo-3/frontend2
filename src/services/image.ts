import axios from "axios";
import { ROUTES_RELATIVE } from "../routes/route.relatives";
import { getTokens, setTokens, redirectToLogin, handleCall, getHeaders } from "./validationMiddleware";
import { tokenApi } from "./auth";

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
                        "Authorization": `Bearer ${getTokens().accessToken}`
                }
            })} catch {
                const { data } = await tokenApi.refresh({ "refreshToken": `${getTokens().refreshToken}` });
                setTokens(data.accessToken, data.refreshToken);
                return axios.post(ROUTES_RELATIVE.image.image, image, {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                        "Authorization": `Bearer ${getTokens().accessToken}`
                    }
                })
            }
        } catch (error) {
            console.error("Refresh Token Error:", error);
            redirectToLogin()
        }
        
    },
    viewQr: function() {
        return axios.get(ROUTES_RELATIVE.image.planeViewQr, {
            responseType: 'arraybuffer',
            headers: getHeaders().headers
          })
    },
}
