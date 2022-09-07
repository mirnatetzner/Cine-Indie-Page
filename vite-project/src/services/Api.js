import axios from "axios"

const url = 'https://cine-indie-api-resilia.herokuapp.com'

export const api = axios.create({
    baseURL: `${url}`
})

