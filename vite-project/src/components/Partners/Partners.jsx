import playarte from '../../img/playarte.svg'
import estacao from '../../img/estacao.png'
import orientcinemas from '../../img/orientcinemas.png'
import "./PartnersStyle.css"

function Partners() {
    return (
        <div className='partnersPage'>
            <div className='title'>
                <h1>Conheça nossos parceiros</h1>
            </div>
            <div className='partners'>
                <div className='individualPartners'>
                    <img 
                    className='image'
                    id='playarte' 
                    src={playarte} 
                    width='250px'
                    height='250px'
                    /> 
                    <button className='button'>
                        <a href='https://www.playartecinemas.com.br/'>
                            Conheça o PlayArte Cinemas
                        </a>
                    </button>
                </div>

                <div className='individualPartners'>
                    <img 
                    className='image'
                    id='estacao' 
                    src={estacao} 
                    width='250px'
                    height='250px'
                    /> 
                    <button className='button'>
                        <a href='http://www.grupoestacao.com.br/'>
                            Conheça a Estação Net Cinema
                        </a>
                    </button>
                </div>

                <div className='individualPartners'>
                    <img 
                    className='image'
                    id='orientcinemas' 
                    src={orientcinemas} 
                    width='250px'
                    height='250px'
                    />
                    <button className='button'>
                        <a href='http://orientcinemas.com.br/'>
                            Conheça a Estação Net Cinema
                        </a>
                    </button> 
                </div>

            </div>
        </div>

        
    )
}

export default Partners