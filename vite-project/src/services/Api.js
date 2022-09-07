import axios from "axios"

const url = 'https://cine-indie-api-resilia.herokuapp.com'

export const api = axios.create({
    baseURL: `${url}`
})

export const getFilmes = () => {
    return axios.get(`${url}/filmes`)
  }

  export const getFilmesById = ()=>{
    return axios.get(`${url}/filmes/${id}`)
  }
  
  export const createFilme = (newFilme) => {
    return axios.post(`${url}/filmes`, newFilme)
  }
  
  export const updateUser = () => {}
  
  export const deleteFilme = (id) => {
    return axios.delete(`${url}/filmes/${id}`)
  }