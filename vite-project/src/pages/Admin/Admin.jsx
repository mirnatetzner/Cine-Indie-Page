import { Link } from 'react-router-dom'
import gifAdmin from  '../../img/admin.gif'
import './Admin.css'
export const Admin = ()=>{
    return(
        <div className='corpoAdmin'>
            <h1>Área do administrador</h1>
            <img src={gifAdmin}/> 
            <div className="menu">
                <div> <Link className='linknav' to='/lista_de_filmes' > Filmes Cadastrados </Link></div>
                <div><Link className='linknav' to='/novo_filme' > Novo Filme </Link></div>
                <div><Link className='linknav' to='/pesquisa' > Pesquisar Filme </Link></div>
               

            </div>
        </div>
    )
}