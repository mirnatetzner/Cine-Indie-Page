import { useState } from "react";
import axios from "axios";
import { Button } from "../../components/Buttons/Button";
import "./ComprarIngressosStyle.css"

function ComprarIngresso () {


  const [filme, setFilme] = useState("");
  const [sala, setSala] = useState('');
  const [cadeira,  setCadeira] = useState('');
  const [data, setData] = useState(0);
  const [hora, setHora ] = useState(0)
  const [precoIngresso, setPrecoIngresso] = useState('');
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("https://cine-indie-api-resilia.herokuapp.com/ingresso", {
        method: "POST",
        body: JSON.stringify({
            filme: filme,
            sala: sala,
            cadeira: cadeira,
            dataHora: (data + hora),
            precoIngresso: precoIngresso,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setFilme("");
        setSala('');
        setCadeira('');
        setData('');
        setHora(0)
        setPrecoIngresso('');
        setMessage("Ingresso comprado com sucesso");
      } else {
        setMessage("Erro na sua solicitação");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h2 className="title">Comprar ingresso</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="lineUp">
          <div className="field">
            <label> Escolha o Filme: </label>
            <input
            className='input'
              type="text"
              value={filme}
              placeholder="Use apenas letras"
              onChange={(e) => setFilme(e.target.value)}
            />
          </div>
          <div className="field">
            <label> Sala de exibição:</label>
            <input
              className='input'
              type="number"
              value={sala}
              placeholder="Sala de exibição"
              onChange={(e) => setSala(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Numeração da cadeira: </label>
            <input
              className='input'
              lassName='input'
              type="text"
              value={cadeira}
              placeholder="Número da cadeira"
              onChange={(e) => setCadeira(e.target.value)}
            />
          </div>
        </div>
        <div className="lineDown">
          <div className="field">
            <label> Dia: </label>
            <input
              className='input'
              type="date"
              value={data}
              placeholder="Data da sessão"
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="field">
            <label> Hora: </label>
            <input
              className='input'
              type="time"
              value={hora}
              placeholder="Hora da sessão"
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
          <div className="field">
            <label> Preço colaborativo: </label>
            <input
              className='input'
              type="number"
              value={precoIngresso}
              placeholder="preço do ingresso"
              onChange={(e) => setPrecoIngresso(e.target.value)}
            />
          </div>
        </div>
        <Button
        type='submit' 
        textoBtn='Comprar Ingresso'
        />
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default ComprarIngresso;