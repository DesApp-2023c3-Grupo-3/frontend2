import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';

export const tokenApi = {
  login: async function(user: any){
    return axios.post(ROUTES_RELATIVE.auth.login, user)
  },
  refresh: async function(token: any){
    return axios.post(ROUTES_RELATIVE.auth.refreshToken, token)
  }
}