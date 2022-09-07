import { Link } from "react-router-dom"
import { CardsContainer } from "../../components/CardContainer/CardContainer"
import './Filmes.css'

function Filmes() {

  return (
    <div className="Filmes">
     <div className="herotitulo">
     <h1>Filmes</h1>
    </div>
        <CardsContainer />

     </div>
  )
}

export default Filmes