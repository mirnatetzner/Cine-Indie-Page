import "./Movies.css"

export const Memoria = () => {

    return (
        <div className="DriveMyCar">
            <div className="lajeteeContainer">
                <div className="image-movie">
                    <img width={370} src="https://br.web.img2.acsta.net/pictures/21/07/11/18/03/0577756.jpg"/>
                </div>
                <div className="DMC_Description">
                    <h2> MEMORIA </h2>
                    <h4> 2021 </h4>
                    <p className="sinopse"> A orquidófila escocesa Jessica Holland foi visitar a irmã em Bogotá. Certa manhã, ela é acordada por um estrondo. Esse som assustador atrapalha seu sono por dias, questionando sua identidade e a levando até estúdios de gravação e aldeias isoladas na selva na tentativa de encontrar sua fonte. </p>
                    <p className="descricao"> <i> "Um hino ao distante passado que se desdobra num presente rigoroso, "Memoria" finalmente revela sua face como uma visão do futuro — uma declaração de fé em um medium que não perdeu seu poder de surpreender."  </i> </p>
                    <p className="fonte"> Los Angeles Times </p>
                </div>
            </div>
        </div>
    )
}