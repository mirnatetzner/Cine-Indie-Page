import { Card } from "../Card/Card"
import { Link, Route } from "react-router-dom"
import style from "./NossoTime.css"

export const NossoTime = () => {

    return (
        <div className="nossotime">
            <div className="conhecaNossos">
                <h2 className="title"> Conheça nossos colaboradores! </h2>
            </div>
            <table className="colaboradoresContainerGeral">
                <tr className="colaboradoresContainer">    
                    <td className="colaboradorcard">
                        <Link to="https://github.com/mirnatetzner">
                            <img className="colaboradorcard" src='https://avatars.githubusercontent.com/u/85193127?v=4' width="230px;" alt="Foto de perfil do Github"/>
                        </Link>
                        <b>Mirna Tetzner</b>
                    </td>
                    <td className="colaboradorcard">
                        <Link to="https://github.com/systemilc">
                            <img className="colaboradorcard" src='https://avatars.githubusercontent.com/u/34551203?v=4' width="230px;" alt="Foto de perfil do Github"/>
                        </Link>
                        <b>Isaac Costa</b>
                    </td>
                </tr>
                <tr className="colaboradoresContainer2">    
                    <td className="colaboradorcard">
                        <Link to="https://github.com/alicebranq">
                            <img className="colaboradorcard" src='https://avatars.githubusercontent.com/u/102565368?v=4' width="230px;" alt="Foto de perfil do Github"/>
                        </Link>
                        <b>Alice Branquinho</b>
                    </td>
                    <td className="colaboradorcard">
                        <Link to="https://github.com/joaofmds">
                        <img className="colaboradorcard" src='https://avatars.githubusercontent.com/u/95502785?v=4' width="230px;" alt="Foto de perfil do Github"/>
                        </Link>
                        <b>João Souza</b>
                    </td>
                </tr>
            </table>

            <div className="redirecionamento">
                <div class='redirecionamentobtn'>
                    <h4 id='parceiroslinkto'>
                        <Link to=''>Conheça também nossos parceiros! </Link> 
                    </h4>
                </div>
            </div>

        </div>
    )
}