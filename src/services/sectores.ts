import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const sectorApi = {
  getSector: async function () {
    try {
      const response = await axios.get(ROUTES_RELATIVE.sector.getSectors);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
