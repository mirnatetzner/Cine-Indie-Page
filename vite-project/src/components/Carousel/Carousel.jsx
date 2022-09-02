import logo from '../../img/logooriginal.png'
import destinosLigados from '../../img/destinosLigados.jpeg'
import './CarouselStyle.css'

function Carousel () {
    return (
        <div className="container">
            <div className="logo">
            <img id='logoheader' src={logo} width='180px'/>
            </div>
            <div className="carousel">
                <div className="item">
                    <div className="image">
                    <img id='destinos' src={destinosLigados} />
                    </div>
                    <div className="info">
                        <span className="name">Filme 1</span>
                        <span className="dateTime">Data e Hora</span>
                        <span className="sinopse">Descrição do filme</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel