import styles from './TabelaFilmes.module.css'
import { Link } from 'react-router-dom'
export const TabelaFilmes = (props) => {

  return (
    <table className={styles.table}>
      <thead>
        <th>ID</th>
        <th>Nome</th>
        <th>Gênero</th>
        <th>Duração</th>
        <th>Ano de Lançamento</th>
        <th>Diretor</th>
        <th>Sinopse</th>
        <th>Link Imagem</th>
      </thead>
      {props.filmes.map(filme => {
        return (
          <tr>
            <td>{filme.id}</td>
            <td>{filme.nome}</td>
            <td>{filme.genero}</td>
            <td>{filme.duracao}</td>
            <td>{filme.anoLancamento}</td>
            <td>{filme.diretor}</td>
            <td>{filme.sinopse}</td>
            <td>{filme.image}</td>
            <td>
              <Link to={`/editar-usuario/${filme.id}`}>Editar</Link> 
              - 
              <a onClick={(e) => {
                 e.preventDefault()
                 props.onDelete(filme.id)
              }} href="#">Deletar</a>
            </td>
        </tr>
      )})}
    </table>
  )
}


//1- Função para fazer a requisição para o backend usando axios.
//2- Chamamos a função no componente Home.jsx dentro do useEffect
//3- Dentro do then pegamos os dados da requisição e colocamos no state.
//4- Criamos um propriedade no componente tabela para receber os filmes
//5- Criamos um map dentro do componente tabela para exibir usuário por usuário na tabela