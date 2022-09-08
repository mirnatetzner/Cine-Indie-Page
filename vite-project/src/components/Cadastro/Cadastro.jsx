import { useState } from 'react'   
import { Link } from 'react-router-dom' 
import "./CadastroStyle.css"

function Cadastro() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${email} foi cadastrado com a senha ${password}`)
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div className="loginPage">
            <div className="description">
            <h1 className="title">Bem vindo à Kine Indie!</h1>
            </div>
            <form onSubmit={cadastrarUsuario} className="form">
                <div className='lineUp'>
                    <div className='field'>
                        <label htmlFor="name"><b>Nome Completo:</b></label>
                        <input 
                        className='input'
                        type="name" 
                        id="name" 
                        name="name" 
                        placeholder="Digite a seu senha" 
                        onChange={(e) => {setName(e.target.value)}}
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor="email"><b>Email:</b></label>
                        <input 
                        className='input'
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Digite o seu email" 
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                </div>
                <div className='lineDown'>
                    <div className='field'>
                        <label htmlFor="password"><b>Senha:</b></label>
                        <input 
                        className='input'
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a seu senha" 
                        onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor="password"><b>Senha novamente:</b></label>
                        <input 
                        className='input'
                        type="password" 
                        id="repassword" 
                        name="repassword" 
                        placeholder="Digite a seu senha novamente" 
                        onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                </div>
                <div>
                    <input 
                    className='button'
                    type="submit" 
                    value="Cadastre-se" 
                    />
                </div>
            </form>
            <div>
                <p className='login'>Já é cadastrado? <Link to='/login'>Entre!</Link></p>
            </div>
        </div>
    )
}

export default Cadastro