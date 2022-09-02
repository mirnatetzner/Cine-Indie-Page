import { useState } from "react";
import axios from "axios";

function Catalogo () {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [duracao,  setDuracao] = useState(0);
  const [anoLancamento, setAnoLancamento] = useState(0);
  const [diretor, setDiretor] = useState("");
  const [sinopse,  setSinopse] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("https://cine-indie-api-resilia.herokuapp.com/filmes", {
        method: "POST",
        body: JSON.stringify({
            nome: nome,
            genero: genero,
            duracao: duracao,
            anoLancamento: anoLancamento,
            diretor: diretor,
            sinopse: sinopse
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setNome("");
        setGenero("");
        setDuracao(0);
        setAnoLancamento(0);
        setDiretor("");
        setSinopse("");
        setMessage("Filme criado com sucesso");
      } else {
        setMessage("Erro na sua solicitação");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
        <h2>Registrar novo filme</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          value={genero}
          placeholder="Gênero do filme"
          onChange={(e) => setGenero(e.target.value)}
        />
        <input
          type="text"
          value={duracao}
          placeholder="Duração do filme"
          onChange={(e) => setDuracao(e.target.value)}
        />
        <input
          type="text"
          value={anoLancamento}
          placeholder="Ano de Lançamento"
          onChange={(e) => setAnoLancamento(e.target.value)}
        />
        <input
          type="text"
          value={diretor}
          placeholder="Diretor"
          onChange={(e) => setDiretor(e.target.value)}
        />
        <input
          type="text"
          value={sinopse}
          placeholder="Sinopse"
          onChange={(e) => setSinopse(e.target.value)}
        />

        <button type="submit">Criar novo filme</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Catalogo;