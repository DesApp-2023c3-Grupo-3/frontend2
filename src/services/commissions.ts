import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const asCommissions = {
    download: async function() {
        try {
            const response = await axios.get(ROUTES_RELATIVE.downloadCommission, { responseType: 'blob' });
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
        try{
            const response = await axios.post(endpoint, data, {
              headers: {
                "content-type": "multipart/form-data",
                //Authorization: `Bearer ${userInfo.token}`,
              },
            })
    
            return response;
          }
          catch(error){
            return error;
          }
    },
    create: async function(excellData: any){

        try{
            const response = await this.post(excellData, ROUTES_RELATIVE.uploadCommission)
            return response;
          }
          catch(error){
            return error;
          }
    },
    toJson: async function(excellData: any){

        try{
          const response = await this.post(excellData, ROUTES_RELATIVE.excelToJson)
          return response;
        }
        catch(error){
          return error;
        }
      }
    
};
