import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getFilmesByIdEditar, updateFilme } from "../../services/Api";
import { useEffect } from "react";
import { useState } from "react";
import "./EditarFilme.module.css";

const EditarFilme = () => {
  const { id } = useParams();
  const [infoFilme, setInfoFilme] = useState([]);
  const [mostraFilme, setMostraFilme] = useState(true);
  const [filmeAtualizado, setFilmeAtualizado] = useState(
    {
      nome: "",
      genero: "",
      duracao: "",
      anoLancamento: "",
      diretor: "",
      sinopse: "",
      image: ""
    },
  );

  useEffect(() => {
    getFilmesByIdEditar(id).then((response) => {
      setInfoFilme(response.data);
    });
  }, []);

  const navigate = useNavigate();

  const edit = () => {
    // event.preventDefault();
    console.log(filmeAtualizado);
    updateFilme(id, filmeAtualizado)
      .then((response) => {
        alert("Filme Atualizado com sucesso!");
        navigate("/lista_de_filmes");
      })
      
  };

  
  return (
    <div className="editarContainer">
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
      {!mostraFilme && (
        <div>
          <input
            placeholder="Nome"
            onChange={(event) => {
              setFilmeAtualizado({
                ...filmeAtualizado,
                nome: event.target.value,
              });
            }}
          ></input>
          <input
            placeholder="Gênero"
            onChange={(event) => {
              setFilmeAtualizado({
                ...filmeAtualizado,
                genero: event.target.value,
              });
            }}
          ></input>
          <input
            placeholder="Duração"
            onChange={(event) => {
              setFilmeAtualizado({
                ...filmeAtualizado,
                duracao: event.target.value,
              });
            }}
          ></input>
          <input
            placeholder="Ano de Lançamento"
            onChange={(event) => {
              setFilmeAtualizado({
                ...filmeAtualizado,
                anoLancamento: event.target.value,
              });
            }}
          ></input>
          <input
            placeholder="Diretor"
            onChange={(event) => {
              setFilmeAtualizado({
                ...filmeAtualizado,
                diretor: event.target.value,
              });
            }}
          ></input>
          <input
            placeholder="Sinopse"
            onChange={(event) => {
              setFilmeAtualizado({
                ...filmeAtualizado,
                sinopse: event.target.value,
              });
            }}
          ></input>
          <input
            placeholder="Imagem"
            onChange={(event) => {
              setFilmeAtualizado({
                ...filmeAtualizado,
                image: event.target.value,
              });
            }}
          ></input>
          <button type="button"
            onClick={(event) => {
              edit();
            }}
          >
            Salvar
          </button>
        </div>
      )}
    </div>
  );
};

export default EditarFilme;
