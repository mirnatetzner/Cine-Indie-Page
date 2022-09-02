import axios from "axios";
const api = axios.create({
  baseURL: "https://cine-indie-api-resilia.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getFilmes = async () => {
  try {
    const response = await api.get("/filmes");
    const Filmes = await response.data;
    return Filmes;
  } catch (erro) {
    console.log(erro);
  }
};

export const getFilmesID = async (id) => {
  try {
    const response = await api.get(`/filmes/${id}`);
    const filme = await response.data;
    return filme;
  } catch (erro) {
    console.log(erro);
  }
};

