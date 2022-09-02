export const Button = ({type, onClick, textoBtn}) => {
    
    return (
        <button type={type} onClick={onClick}>{textoBtn}</button>
    )
}