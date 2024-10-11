import axios from "axios"
import { getHeaders, handleCall } from "./validationMiddleware"
import { ROUTES_RELATIVE } from "../routes/route.relatives"
import keycloak from "./keycloak/keycloack"

export const mapApi = {
  create: async function (newMap: any) {
    return handleCall(axios.post, [ROUTES_RELATIVE.map.createMap, newMap])
  },
  delete: async function (mapId: number) {
    return handleCall(axios.delete, [ROUTES_RELATIVE.map.delete + '/' + mapId])
  },
  downloadImageById: async function (mapId: number, name: string) {
    try {
      const response = await axios.get(`${ROUTES_RELATIVE.map.downloadImageById}/${mapId}/download`, {
        responseType: 'blob',
        headers: {
          "Authorization": `Bearer ${keycloak.token}`
        }
      });
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log("a");
    }
  },
  getAll: async function () {
    return handleCall(axios.get, [ROUTES_RELATIVE.map.getAll])
  },
  getImageById: async function (mapId: number) {
    return axios.get(ROUTES_RELATIVE.map.getImageById + '/' + mapId + '/view', {
      responseType: 'arraybuffer',
      headers: {
        ...getHeaders().headers,
        "Content-Type": 'multipart/form-data',
        "Authorization": `Bearer ${keycloak.token}`
      },
    })
  }
}
