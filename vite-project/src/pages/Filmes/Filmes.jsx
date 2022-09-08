import { Link } from "react-router-dom"
import { CardsContainer } from "../../components/CardContainer/CardContainer"
import './Filmes.css'
import logodouble from '../../img/logodouble.png'

function Filmes() {

  return (
    <div className="Filmes">
    
      <div className="herotitulo">
        <h1 id="filmesemcartaz">FILMES EM CARTAZ </h1>
      </div>
        
        <CardsContainer />

        <div className="imageLogo">
          <img src={logodouble}></img>
        </div>

    </div>
        <CardsContainer />

     </div>
  )
}

export default Filmes