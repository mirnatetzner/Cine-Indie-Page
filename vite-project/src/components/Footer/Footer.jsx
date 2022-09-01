import { Link } from 'react-router-dom'
import './FooterStyle.css'

export const Header = () => {
 

    return (
    <header className="nav">
        <img id='logoheader' src={logo} width='180px'/> 
        
        <nav className='actions'>
           
         <Link className='linknav' to='/parceiros' > Parceiros </Link>
         <Link className='linknav' to='/sobre_nos' > Sobre Nós </Link>

        </nav>
    </header>
    )

}