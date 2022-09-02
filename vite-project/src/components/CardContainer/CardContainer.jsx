import { Card } from "../Card/Card"
// import './CardsContainer.css'
import { api } from "../../services/Api"
import { useState, useEffect } from "react"
// app.use(cors()) < NAO ESQUECER !!!!

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
                return <Card key={index} title={elemento.nome}/>
            })}

        </div>
    )
}