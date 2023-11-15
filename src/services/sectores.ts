import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import { dataConfig } from './auth.guard';

export const sectorApi = {
    getSector: async function() {
        try {
          const response = await axios.get(ROUTES_RELATIVE.sector.getSectors, dataConfig);
          return response.data;
        } catch (error) {
            return error;
        }
      }
}