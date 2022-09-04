import React from "react"
import  './Card.css'

export const Card = ({image, title, sinopse, ano}) => {

    return (
        <div className="containerFilmes">
           <img src={image}></img>
            <h3>{title}</h3>
            <p>{sinopse}</p>
            <p className="anoFilme">{ano}</p>
        </div>
    )
}