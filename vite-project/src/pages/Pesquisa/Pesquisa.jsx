import { useState } from "react";
import { useEffect } from "react";
import { getFilmes } from "../../services/Api";

const Pesquisa = () => {
  const [pesquisa, setPesquisa] = useState();
  const [pesquisaInput, setPesquisaInput] = useState();
  const [mostra, setMostra] = useState(false);
  const [filme, setFilme] = useState()

  useEffect(() => {
    getFilmes().then((response) => {
        console.log('deu certo')
      setPesquisa(response.data);
    });
  }, []);

  const pesquisar = () => {
    const filmePesquisado = pesquisa.filter(
      (item) => item.nome === pesquisaInput
    );
    setFilme(filmePesquisado)
    setMostra(true);
  };

  return (
    <div>
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
      {mostra && filme.map(item => {
        return(
            <div>
                <p>{item.nome}</p>
                <p>{item.genero}</p>
                <p>{item.duracao}</p>
                <p>{item.anoLancamento}</p>
                <p>{item.sinopse}</p>
                <p>{item.image}</p>

            </div>
        )
      })}
    </div>
  );
};

export default Pesquisa;
