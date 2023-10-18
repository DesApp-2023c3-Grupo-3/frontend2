import axios from "axios"

const BASE_URL = "http://[::1]:3001/"

export const instance = axios.create({
    baseURL: BASE_URL
})