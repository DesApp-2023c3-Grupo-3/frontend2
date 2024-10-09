import axios from "axios"
import { handleCall } from "./validationMiddleware"
import { ROUTES_RELATIVE } from "../routes/route.relatives"

export const mapApi = {
  create: async function (newMap: any) {
    return handleCall(axios.post, [ROUTES_RELATIVE.map.createMap, newMap])
  },
  delete: async function (mapId: number) {
    return handleCall(axios.delete, [ROUTES_RELATIVE.map.delete + '/' + mapId])
  },
  downloadImageById: async function (mapId: number) {
    return handleCall(axios.get, [ROUTES_RELATIVE.map.downloadImageById + '/' + mapId + '/download', mapId])
  },
  getAll: async function () {
    return handleCall(axios.get, [ROUTES_RELATIVE.map.getAll])
  },
  getImageById: async function (mapId: number) {
    return handleCall(axios.get, [ROUTES_RELATIVE.map.getImageById + '/' + mapId + '/view', mapId])
  }
}
