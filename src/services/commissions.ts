import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const commissionApi = {
  download: async function () {
    try {
      const response = await axios.get(ROUTES_RELATIVE.commission);
      return response;
    } catch (error) {
      return error;
      }
  },
  post: async function (data: any, endpoint: string) {
    try {
      const response = await axios.post(endpoint, data, {
        headers: {
          "content-type": "multipart/form-data",
          //Authorization: `Bearer ${userInfo.token}`,
        },
      })
      return response;
    } catch(error){
      return error;
    }
  },
  create: async function (excelData: any) {
    try {
      const response = await this.post(excelData, ROUTES_RELATIVE.uploadCommission)
      return response;
    } catch(error){
      return error;
    }
  },
  toJson: async function (excelData: any) {
    try {
      return this.post(excelData, ROUTES_RELATIVE.excelToJson);
    } catch (error) {
      return error;
    }
  },
  getAll: () => []
};
