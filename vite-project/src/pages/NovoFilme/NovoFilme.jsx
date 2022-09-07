import { useNavigate, useParams } from 'react-router-dom'
import { FormFilmes } from '../../components/FormFilmes/FormFilmes'
import { createFilme } from '../../services/Api'
import styles from './NovoFilme.module.css'

export const CreateFilme = () => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div className={styles.createFilme}>
      <h1>{params.id ? "Editar Filme" : "Cadastrar Filme"}</h1>
      <div className={styles.FormFilmes}>
        <FormFilmes hasUser={params.id} onFinish={(filme) => {
          createFilme(filme).then(response => {
            console.log(filme)
            navigate('/filmes')
          }).catch(error => {
            alert("Erro ao cadastrar novo filme")
            console.log("Erro >>", error)
          })
        }}/>
      </div>
    </div>
  )
}