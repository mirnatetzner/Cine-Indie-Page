import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getFilmesByIdEditar, updateFilme } from "../../services/Api";
import { useEffect } from "react";
import { useState } from "react";
import './EditarFilme.css'

const EditarFilme = () => {
  const { id } = useParams();
  const [infoFilme, setInfoFilme] = useState([]);
  const [mostraFilme, setMostraFilme] = useState(true);
  const [filmeAtualizado, setFilmeAtualizado] = useState({
    nome: "",
    genero: "",
    duracao: "",
    anoLancamento: "",
    diretor: "",
    sinopse: "",
    image: "",
  });

  useEffect(() => {
    getFilmesByIdEditar(id).then((response) => {
      setInfoFilme(response.data);
    });
  }, []);

  const navigate = useNavigate();

  const edit = () => {
    // event.preventDefault();
    console.log(filmeAtualizado);
    updateFilme(id, filmeAtualizado).then((response) => {
      alert("Filme Atualizado com sucesso!");
      navigate("/lista_de_filmes");
    });
  };

  return (
    <div className="editarContainer">
      {mostraFilme && (
        <div className='containerMostrarFilme'>
          <img src={infoFilme.image} />
          <div className="mostrarFilmes">
          <p><strong>Id:</strong> {infoFilme.id}</p>
          <p><strong>Nome:</strong> {infoFilme.nome}</p>
          <p><strong>Gênero:</strong> {infoFilme.genero}</p>
          <p><strong>Duração:</strong> {infoFilme.duracao}</p>
          <p><strong>Ano de Lançamento:</strong> {infoFilme.anoLancamento}</p>
          <p><strong>Diretor:</strong> {infoFilme.diretor}</p>
          </div>
          <button className="editButton"
            onClick={(event) => {
              setMostraFilme(false);
            }}
          >
            Editar
          </button>
        </div>
      )}
      {!mostraFilme && (
        <div className="container-inputs">
          <div className="alinhamentoInput">
          <div className="displayColunm">
            <label>Nome: </label>
            <input
              value={infoFilme.nome}
              onChange={(event) => {
                setFilmeAtualizado({
                  ...filmeAtualizado,
                  nome: event.target.value,
                });
              }}
            ></input>
          </div>
          <div className="displayColunm">
            <label>Gênero: </label>
            <input
              value={infoFilme.genero}
              onChange={(event) => {
                setFilmeAtualizado({
                  ...filmeAtualizado,
                  genero: event.target.value,
                });
              }}
            ></input>
          </div>
          <div className="displayColunm">
            <label>Duração: </label>
            <input
              value={infoFilme.duracao}
              onChange={(event) => {
                setFilmeAtualizado({
                  ...filmeAtualizado,
                  duracao: event.target.value,
                });
              }}
            ></input>
          </div>
          <div className="displayColunm">
            <label>Ano de Lançamento: </label>
            <input
              value={infoFilme.anoLancamento}
              onChange={(event) => {
                setFilmeAtualizado({
                  ...filmeAtualizado,
                  anoLancamento: event.target.value,
                });
              }}
            ></input>
          </div>
          <div className="displayColunm">
            <label>Diretor: </label>
            <input
              value={infoFilme.diretor}
              onChange={(event) => {
                setFilmeAtualizado({
                  ...filmeAtualizado,
                  diretor: event.target.value,
                });
              }}
            ></input>
          </div>
          <div className="displayColunm">
            <label>Sinopse: </label>
            <input
              value={infoFilme.sinopse}
              onChange={(event) => {
                setFilmeAtualizado({
                  ...filmeAtualizado,
                  sinopse: event.target.value,
                });
              }}
            ></input>
          </div>
          <div className="displayColunm">
            <label>Imagem: </label>
            <input
              value={infoFilme.image}
              onChange={(event) => {
                setFilmeAtualizado({
                  ...filmeAtualizado,
                  image: event.target.value,
                });
              }}
            ></input>
            </div>
          </div>
          
            <button className="editButton"
              type="button"
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
