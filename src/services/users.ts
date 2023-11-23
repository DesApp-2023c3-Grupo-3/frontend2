import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import { handleCall } from './validationMiddleware';

export const userApi = {
  create: async function(newUser: User){
    return handleCall(axios.post, [ROUTES_RELATIVE.user.createUser, newUser])
  },
  delete: async function(user: User){
    return handleCall(axios.delete, [ROUTES_RELATIVE.user.deleteUser + '/' + user.id])
  },
  update: async function(user: User){
    return handleCall(axios.patch, [ROUTES_RELATIVE.user.updateUser + '/' + user.id, user])
  },
  getAll: async function(){
    return handleCall(axios.get, [ROUTES_RELATIVE.user.users])
  },
}
