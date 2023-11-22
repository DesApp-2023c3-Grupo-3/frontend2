import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import { getHeaders, handleCall } from './validationMiddleware';

export const commissionApi = {
  download: async function() {
    try {
      const response = await handleCall(axios.get, [ROUTES_RELATIVE.course.downloadCommission, { responseType: 'blob' }], getHeaders);
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.click();
      return true;
    } catch (error) {
      return false;
    }
  },
  post: async function(data: any, endpoint: string) {
    try {
      return handleCall(axios.post, [endpoint, data], getHeaders);
    } catch(error) {
      return error;
    }
  },
  create: async function(excelData: any){
    try {
      return handleCall(this.post, [excelData, ROUTES_RELATIVE.course.uploadCommission], getHeaders);
    } catch(error) {
      return error;
    }
  },
  toJson: async function(excelData: any){
    try{
      return handleCall(this.post, [excelData, ROUTES_RELATIVE.image.excelToJson], getHeaders);
    } catch(error) {
      return error;
    }
  },
  getAll: async function() {
    try {
      const response = await handleCall(axios.get, [ROUTES_RELATIVE.course.commission], getHeaders);
      return response;
    } catch (error) {
        return error;
    }
  }
}
