import axios from "axios"

const BASE_URL = "http://186.12.145.198:4000/"

export const instance = axios.create({
    baseURL: BASE_URL
})