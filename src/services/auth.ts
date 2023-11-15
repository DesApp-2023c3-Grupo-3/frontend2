import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const tokenApi = {
  login: async function(user: User){
    return axios.post(ROUTES_RELATIVE.auth.login, user)
  },
  refreshToken: async function(user: User){
    return axios.post(ROUTES_RELATIVE.auth.refreshToken, user)
  }
}