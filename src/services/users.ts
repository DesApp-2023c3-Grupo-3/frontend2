import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import { getHeaders, handleCall } from './validationMiddleware';

export const userApi = {
  create: async function(newUser: User){
    return handleCall(axios.post, [ROUTES_RELATIVE.user.createUser, newUser], getHeaders)
  },
  getAll: async function(){
    return handleCall(axios.get, [ROUTES_RELATIVE.user.users], getHeaders)
  },
}
