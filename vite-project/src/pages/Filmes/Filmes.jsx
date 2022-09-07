import { Link } from "react-router-dom"
import { CardsContainer } from "../../components/CardContainer/CardContainer"
import './Filmes.css'

function Filmes() {

  return (
    <div className="Filmes">
     <h1>Filmes</h1>
     <Link to='/comprar-ingresso'>
        <CardsContainer />
      
      </Link> 
    </div>
  )
}

export default Filmes