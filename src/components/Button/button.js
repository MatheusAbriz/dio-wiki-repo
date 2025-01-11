import { ContainerButton } from './button-css'

const Button = ({ onClick }) =>{
    return(
        <ContainerButton onClick={ onClick }>
            Buscar
        </ContainerButton>
    )
}

export default Button;