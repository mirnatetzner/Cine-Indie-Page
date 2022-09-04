import React from "react"
import  './Card.css'

export const Card = ({image, title, sinopse, ano}) => {

    return (
        <div className="containerFilmes">
            <div className="nome_imagem">
                       <img src={image}></img>
           </div>
           
           <div className="informacoes">
           <h3>{title}</h3>
            <h3>Informações</h3>
            <p>{sinopse}</p>
            <p className="anoFilme">{ano}</p>
            </div>
        </div>
    )
}