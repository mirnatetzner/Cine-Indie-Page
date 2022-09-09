import styles from './FormFilmes.module.css'
import { useState } from 'react';

export const FormFilmes = (props) => {
  const [Filme, setFilme] = useState({
    nome: "",
    genero: "",
    duracao: "",
    anoLancamento: "",
    diretor: "",
    sinopse: "",
    image: ""
  })

  return (
    <form className={styles.form}>
      <input 
        type="text" 
        placeholder="Nome do Filme" 
        onChange={(event) => {
          setFilme({
            ...Filme,
            nome: event.target.value
          })
        }} />
      <input 
        type="text" 
        placeholder="Gênero" 
        onChange={(event) => {
          setFilme({
            ...Filme,
            genero: event.target.value
          })
        }}
      />
      <input 
        type="text" 
        placeholder="Duração" 
        onChange={(event) => {
          setFilme({
            ...Filme,
            duracao: event.target.value
          })
        }}
      />
      <input 
        type="text" 
        placeholder="Ano de Lançamento" 
        onChange={(event) => {
          setFilme({
            ...Filme,
            anoLancamento: event.target.value
          })
        }}
      />
      <input 
        type="text" 
        placeholder="Diretor" 
        onChange={(event) => {
          setFilme({
            ...Filme,
            diretor: event.target.value
          })
        }}
      />
      <input 
        type="text" 
        placeholder="Sinopse" 
        onChange={(event) => {
          setFilme({
            ...Filme,
            sinopse: event.target.value
          })
        }}
      />
      <input 
        type="text" 
        placeholder="image" 
        onChange={(event) => {
          setFilme({
            ...Filme,
            image: event.target.value
          })
        }}
      />
      <button onClick={(e) => {
        e.preventDefault()
        props.onFinish(Filme)
      }}>{props.hasFilme ? "Editar" : "Cadastrar"}</button>
    </form>
  )
}