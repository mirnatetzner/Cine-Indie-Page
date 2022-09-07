import { Link } from 'react-router-dom'
import './Admin.css'
export const Admin = ()=>{
    return(
        <div className='corpoAdmin'>
            <h1>Admin</h1>
            <div className="menu">
                <div> <Link className='linknav' to='/lista_de_filmes' > Filmes Cadastrados </Link></div>
                <div><Link className='linknav' to='/novo_filme' > Novo Filme </Link></div>
                <div>Editar / Excluir Filme</div>
               

            </div>
        </div>
    )
}