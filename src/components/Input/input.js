import { ContainerInput } from './input-css'

const Input = ({ value, onChange }) =>{
    return(
        <ContainerInput>
            <input placeholder="Digite algo..." value={ value } onChange={ onChange }/>
        </ContainerInput>
    )
}

export default Input;