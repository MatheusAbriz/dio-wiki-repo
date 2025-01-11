import { ItemContainer } from './item-css'
const ItemRepo = ({ repo, handleRemoveRepo }) =>{

    const handleRemove = () =>{
        handleRemoveRepo(repo.id)
    }

    return(
        <ItemContainer>
            <h3>{ repo.name }</h3>
            <p>{ repo.full_name }</p>
            <a href={ repo.html_url } className="repositorio" target="_blank" rel="noreferrer">Ver repositório</a><br/>
            <a href="#" className="remover" rel="noreferrer" onClick={ handleRemove }>Remover</a>
            <hr></hr>
        </ItemContainer>
    )
}

export default ItemRepo;