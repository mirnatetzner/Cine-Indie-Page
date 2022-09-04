import { Card } from "../Card/Card"
import { api } from "../../services/Api"
import { useState, useEffect } from "react"
import './CardContainer.css'


export const CardsContainer = ({}) => {
    const [filmes, setFilmes] = useState([])
    useEffect(() => {
        api.get("/filmes").then((response)=>{
            console.log(response.data)
            setFilmes(response.data)
        })
    
    }, [])

    return (
        <div className="card-container">
            {filmes.map((elemento, index)=>{
                return <Card key={index} image={elemento.image}title={elemento.nome} sinopse={elemento.sinopse} ano={elemento.anoLancamento}/>
            })}

        </div>
    )
}