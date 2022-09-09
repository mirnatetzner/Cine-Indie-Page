import { useNavigate, useParams } from 'react-router-dom'
import { FormFilmes } from '../../components/FormFilmes/FormFilmes'
import { createFilme } from '../../services/Api'
import './NovoFilme.css'

export const CreateFilme = () => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div className="createFilme">
      <h1>{params.id ? "Editar Filme" : "Cadastrar Filme"}</h1>
      <div className="FormFilmes">
        <FormFilmes hasUser={params.id} onFinish={(filme) => {
          createFilme(filme).then(response => {
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