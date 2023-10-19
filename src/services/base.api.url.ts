import axios from "axios"

const BASE_URL = process.env.REACT_APP_API || "http://[::1]:3001/"

export const instance = axios.create({
    baseURL: BASE_URL
})