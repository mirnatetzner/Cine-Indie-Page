import axios from "axios"

export const api = axios.create({
    baseURL: `https://cine-indie-api-resilia.herokuapp.com/
    `
})