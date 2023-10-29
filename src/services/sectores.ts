import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const sectorApi = {
    getSector: async function() {
        try {
          const response = await axios.get(ROUTES_RELATIVE.getSector);
          console.log("response:", response)
          return response;
        } catch (error) {
            return error;
        }
      }
}