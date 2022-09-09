//  nome: "",
// 	genero: "",
// 	duracao: "",
// 	anoLancamento: "",
// 	diretor: "",
// 	sinopse: "",
// 	image: ""

import { useParams } from "react-router-dom";
import { getFilmesByIdEditar } from "../../services/Api";
import { useEffect } from "react";
import { useState } from "react";
import { FormFilmes } from "../../components/FormFilmes/FormFilmes";

const EditarFilme = () => {
  const { id } = useParams();
  const [infoFilme, setInfoFilme] = useState([]);
  const [mostraFilme, setMostraFilme] = useState(true);
  const [filmeAtualizado, setFilmeAtualizado] = useState([
    {
      nome: "",
      genero: "",
      duracao: "",
      anoLancamento: "",
      diretor: "",
      sinopse: "",
      image: "",
    },
  ]);

  useEffect(() => {
    getFilmesByIdEditar(id).then((response) => {
      setInfoFilme(response.data);
    });
  }, []);

  const edit = ({ id }) => {};

  console.log(infoFilme);
  return (
    <div>
      {mostraFilme && (
        <div>
          <p>{infoFilme.id}</p>
          <p>{infoFilme.nome}</p>
          <p>{infoFilme.genero}</p>
          <p>{infoFilme.duracao}</p>
          <p>{infoFilme.anoLancamento}</p>
          <p>{infoFilme.diretor}</p>
          <p>{infoFilme.image}</p>

          <button
            onClick={(event) => {
              setMostraFilme(false);
            }}
          >
            Editar
          </button>
        </div>
      )}
      <div>
        <input
          placeholder="Nome"
          onChange={(event) => {
            setFilme({
              ...Filme,
              nome: event.target.value,
            });
          }}
        ></input>
        <input
          placeholder="Gênero"
          onChange={(event) => {
            setFilmeAtualizado({
              ...FilmeAtualizado,
              genero: event.target.value,
            });
          }}
        ></input>
        <input
          placeholder="Duração"
          onChange={(event) => {
            setFilmeAtualizado({
              ...FilmeAtualizado,
              duracao: event.target.value,
            });
          }}
        ></input>
        <input
          placeholder="Ano de Lançamento"
          onChange={(event) => {
            setFilmeAtualizado({
              ...FilmeAtualizado,
              anoLancamento: event.target.value,
            });
          }}
        ></input>
        <input
          placeholder="Diretor"
          onChange={(event) => {
            setFilmeAtualizado({
              ...FilmeAtualizado,
              diretor: event.target.value,
            });
          }}
        ></input>
        <input
          placeholder="Sinopse"
          onChange={(event) => {
            setFilmeAtualizado({
              ...FilmeAtualizado,
              sinopse: event.target.value,
            });
          }}
        ></input>
        <input
          placeholder="Imagem"
          onChange={(event) => {
            setFilmeAtualizado({
              ...FilmeAtualizado,
              image: event.target.value,
            });
          }}
        ></input>
      </div>
    </div>
  );
};

export default EditarFilme;
