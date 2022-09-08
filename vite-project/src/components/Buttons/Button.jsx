import "./ButtonsStyle.css"

export const Button = ({type, onClick, textoBtn}) => {
    
    return (
        <button 
            className="button"
            type={type} 
            onClick={onClick}>{textoBtn}
        </button>
    )
}