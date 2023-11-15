import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import { dataConfig } from './auth.guard';

export const userApi = {
  create: async function(newUser: User){
    return axios.post(ROUTES_RELATIVE.user.createUser, newUser, dataConfig)
  },
  getAll: async function(){
    return axios.get(ROUTES_RELATIVE.user.users, dataConfig)
  },
}
