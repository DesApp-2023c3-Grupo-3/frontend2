import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import { handleCall } from './validationMiddleware';

export const roleApi = {
    getAll: async function() {
        try {
          const response = await handleCall(axios.get, [ROUTES_RELATIVE.role.getAll]);
          return response.data;
        } catch (error) {
            return error;
        }
      }
}
