import { useState } from "react";
import { useEffect } from "react";
import { getFilmes } from "../../services/Api";
import { Link } from "react-router-dom";
import "./Pesquisa.css";

const Pesquisa = () => {
  const [pesquisa, setPesquisa] = useState();
  const [pesquisaInput, setPesquisaInput] = useState();
  const [mostra, setMostra] = useState(false);
  const [filme, setFilme] = useState();

  useEffect(() => {
    getFilmes().then((response) => {
      console.log("deu certo");
      setPesquisa(response.data);
    });
  }, []);

  const pesquisar = () => {
    const filmePesquisado = pesquisa.filter(
      (item) => item.nome === pesquisaInput
    );
    setFilme(filmePesquisado);
    setMostra(true);
  };

  return (
    <div className="pesquisaContainer">
      <input
        placeholder="Pesquisa"
        onChange={(event) => {
          setPesquisaInput(event.target.value);
        }}
      ></input>
      <button
        onClick={(event) => {
          setMostra(true);
          pesquisar();
        }}
      >
        Pesquisar
      </button>
      {mostra &&
        filme.map((item) => {
          return (
            <div className="filmePesquisado">
              <img src={item.image}></img>
              <div className="informacoesFilme">
                <label>Id: </label>
                <p>{item.id}</p>
              </div>
              <div className="informacoesFilme">
                <label>Nome: </label>
                <p>{item.nome}</p>
              </div>
              <div className="informacoesFilme">
                {" "}
                <label>Gênero: </label>
                <p>{item.genero}</p>
              </div>
              <div className="informacoesFilme"></div>
              <div className="informacoesFilme"></div>
              <div className="informacoesFilme">
                <label>Duração: </label>
                <p>{item.duracao}</p>
              </div>
              <div className="informacoesFilme">
                <label>Ano de Lançamento: </label>
                <p>{item.anoLancamento}</p>
              </div>
              <div className="informacoesFilme">
                {" "}
                <label>Sinopse: </label>
                <p>{item.sinopse}</p>
              </div>
              <button><Link to={`/editar_filme/${item.id}`}>Editar</Link></button>
            </div>
          );
        })}
    </div>
  );
};

export default Pesquisa;
