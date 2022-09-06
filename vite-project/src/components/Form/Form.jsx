import { useState } from 'react'    
import "./FormStyle.css"

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${email}`)
    }

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    return (
        <div className="formPage">
            <div className="description">
            <h1 className="title">Quer se tornar um parceiro da Kine Indie também?</h1>
            <h2 className="subtitle">Realize o seu cadastro e nossa equipe entrará em contato.</h2>
            </div>
            <form onSubmit={cadastrarUsuario} className="form">
                <div>
                    <label htmlFor="name"><b>Nome:</b></label>
                    <input 
                    className='input'
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite o seu nome"
                    onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
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
                    <input 
                    className='button'
                    type="submit" 
                    value="Cadastrar" 
                    />
                </div>
            </form>
        </div>
    )
}

export default Form