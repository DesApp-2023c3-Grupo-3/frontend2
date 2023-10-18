import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const asCommissions = {
    getAll: async function() {
        try {
          const response = await axios.get(ROUTES_RELATIVE.commission);
          return response;
        } catch (error) {
            return error;
        }
    },
    create: async function(excellData: any){
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
