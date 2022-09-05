import { useState } from 'react'    

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${email}`)
    }

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    return (
        <div>
            <h1>Quer se tornar um parceiro da Kine Indie também?</h1>
            <h2>Realize o seu cadastro e nossa equipe entrará em contato.</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite o seu nome: "
                    onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Digite a sua senha: " 
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form