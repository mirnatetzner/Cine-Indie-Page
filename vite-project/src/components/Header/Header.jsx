import { Link } from 'react-router-dom'
import logo from '../../img/logooriginal.png'
import './HeaderStyle.css'

export const Header = () => {


    return (
    <header className="nav">
        <Link className='linknav' to='/'><img id='logoheader' src={logo} width='260px'/></Link>
        <nav className='actions'>
            <Link className='linknav' to='/filmes' > Em cartaz </Link>
            <Link className='linknav' to='/parceiros' > Parceiros </Link>
            <Link className='linknav' to='/sobre_nos' > Sobre Nós </Link>
            <Link className='linknav' to='/login' > Login </Link>
        </nav>
    </header>
    )

}