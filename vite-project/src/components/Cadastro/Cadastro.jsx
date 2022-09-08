import { useState } from 'react'   
import { Link } from 'react-router-dom' 
import "./CadastroStyle.css"

function Cadastro() {
    return (
        <div className="loginPage">
            <div className="description">
            <h1 className="title">Bem vindo à Kine Indie!</h1>
            </div>
            <form onSubmit={cadastrarUsuario} className="form">
                <div>
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
                <div>
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
                <div>
                    <input 
                    className='button'
                    type="submit" 
                    value="Entre" 
                    />
                </div>
            </form>
            <div>
                <p>Ainda não se cadastrou? <Link to='/cadastro'>Registre-se!</Link></p>
            </div>
        </div>
    )
}

export default Cadastro