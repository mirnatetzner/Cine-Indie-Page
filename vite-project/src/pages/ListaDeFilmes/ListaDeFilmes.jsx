import { useEffect, useState } from 'react'
import { TabelaFilmes } from '../../components/TabelaFilmes/TabelaFilmes'
import {getFilmes, deleteFilme} from '../../services/Api'
import styles from './ListaDeFilmes.module.css'

export const ListaDeFilmes = () => {
  const [filmes, setFilmes] = useState([]);

  const fetchFilmes = () => {
    getFilmes().then(({ data }) => {
      setFilmes(data)
    }).catch(error => {
      console.log("ERROR", error)
    })
  }

  useEffect(() => {
    fetchFilmes()
  }, [])

  return (
    <div className={styles.home}>
      <h1>Lista de Filmes Cadastrados</h1>
      <div className={styles.table}>
        <TabelaFilmes filmes={filmes} onDelete={(id) => {
          const deleteFilmeConfirm = confirm("Você deseja deletar esse Filme?")
          if(deleteFilmeConfirm) {
            deleteFilme(id).then(() => {
              alert("Filme deletado com sucesso")
              fetchFilmes()
            }).catch(error => {
              alert("Erro ao deletar este filme")
            })
          }
        }} />
      </div>
    </div>
  )
}