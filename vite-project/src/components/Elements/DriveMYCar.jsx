import style from "./Movies.css"

export const DriveMyCar = () => {

    return (
        <div className="DriveMyCar">
            <div className="dmyContainer">
                <div className="image-movie">
                    <img id="imageDMC" width={400} src="https://m.media-amazon.com/images/M/MV5BY2NkNDdmZTUtYWQ2MC00MjUyLTk1MGMtNWZiZjI3ZWMzNDYwXkEyXkFqcGdeQXVyNTY4ODAxODI@._V1_FMjpg_UX1000_.jpg"/>
                </div>
                <div className="DMC_Description">
                    <h2> DRIVE MY CAR </h2>
                    <h4> 2021 </h4>
                    <p className="sinopse"> Dois anos após a morte de sua esposa, Yusuke Kafuku recebe uma oferta para dirigir uma peça num festival de teatro em Hiroshima. Lá, ele conhece Misaki, uma jovem reservada, designada para ser sua motorista. Enquanto passam tempo juntos, Kafuku confronta o mistério de sua esposa que o assombra.</p>
                    <p className="descricao"> "Drive My Car é uma história de perda e perdão — não tão somente o ato de perdoar uma outra pessoa, mas de se perdoar... Com suas palavras e ideais, Murakami traça as rotas; Hamaguchi explora os ramos dos sentimentos que brotam, usando a linguagem de Chekhov — seus diálogos de arrependimentos e anseio, e a importância de capturar a alegria fugaz da vida que vivemos — para encontrar vantagens nesses mesmos ramos." </p>
                    <p className="fonte">Revista TIME</p>
                </div>
            </div>
        </div>
    )
}