import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const asCommissions = {
    getAll: async function() {
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
    create: async function(excellData: any){

      console.log(excellData)

      try{
        const response = await axios.post(ROUTES_RELATIVE.uploadCommission, excellData, {
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
    }
};