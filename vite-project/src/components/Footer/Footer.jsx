import { Link } from 'react-router-dom'
import logo from '../../img/kineindie.png'
import './FooterStyle.css'

export const Footer = () => {


    return (
        <footer className='foot'>
            <div className='containerfooter'>
                <img className='imgfooter' id='logoheader' src={logo}/> 
                <div className='infosfinais'>
                    <h4>Termos legais</h4>
                    <p className='juntese'>Ajuda <br/>
                    Juste-se a nós<br/>
                    CNPJ - 14.021.629/0003-01</p>
                </div>
                <div className='links-to-footer'>
                    <Link className='linkfooter' to='/parceiros' > Parceiros </Link>
                    <Link className='linkfooter' to='/sobre_nos' > Sobre Nós </Link>
                </div>
            </div>
        </footer>
    )

}