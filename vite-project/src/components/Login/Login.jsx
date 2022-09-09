import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./LoginStyle.css";

function Login() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário ${email} foi cadastrado com a senha ${password}`);
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  return (
    <div className="loginPage">
      <div className="description">
        <h1 className="title">Bem vindo à Kine Indie!</h1>
        <p>Dados para acesso demo:</p>
        <p>admin: admin@admin.com | senha: 123</p>
        <p>admin: cliente@cliente.com | senha: 123</p>
      </div>
      <form onSubmit={cadastrarUsuario} className="form">
        
           <div>
          <label htmlFor="email">
            <b>Email:</b>
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">
            <b>Senha:</b>
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="Digite a seu senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="button"
            onClick={() => {
              if (email === "admin@admin.com" && password === "123") {
                navigate("/admin");
              } else if (email === "cliente@cliente.com" && password === "123") {
                navigate("/comprar-ingresso");
              } else{
                alert("Dados incorretos. Favor verificar as informações")
              }
            }}
          >Entrar</button>
        </div>
      </form>
      <div>
      
        <p className="cadastro">
          Ainda não se cadastrou? <Link to="/cadastro">Registre-se!</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
