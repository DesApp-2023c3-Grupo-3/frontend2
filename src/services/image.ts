import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const imageAPI = {
  viewId: function (id: number) {
    return axios.get(`${ROUTES_RELATIVE.image}/${id}/view`);
  },
  create: function (image: any) {
    return axios.post(ROUTES_RELATIVE.image.image, image, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  viewQr: function () {
    return axios.get(ROUTES_RELATIVE.image.planeViewQr, {
      responseType: 'arraybuffer',
    });
  },
};
