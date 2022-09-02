import React from "react"

export const Card = ({ title, sinopse, ano}) => {

    return (
        <div className="containerFilmes">
           
            <h3>{title}</h3>
            <p>{sinopse}</p>
            <p className="anoFilme">{ano}</p>
        </div>
    )
}