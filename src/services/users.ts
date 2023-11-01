import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const userApi = {
  create: async function(newUser: User){
    try {
      return axios.post(JSON.stringify(newUser), ROUTES_RELATIVE.users);
    } catch(error) {
      return error;
    }
  },
  getAll: async function(){
    return axios.get(ROUTES_RELATIVE.users)
  },
}
