import { useState } from 'react'
import logo from '../../assets/github-logo.svg'
import { Container } from './home-css'
import Input from '../../components/Input/input'
import Button from '../../components/Button/button'
import ItemRepo from '../../components/ItemRepo/itemRepo'
import api from '../../services/api.js'

const Home = () =>{

    const [ currentRepo,  setCurrentRepo ] = useState('')
    const [ repos, setRepos ] = useState([])

    const handleSearchRepo = async() =>{
        try{
            const { data } = await api.get(`repos/${ currentRepo }`)

            //Caso tenha ID(achou um dado)
            //Definindo em repos o que já existia dentro dele + o novo repositório
            if(data.id){
    
                //Repositório já foi adicionado anteriormente
                const isExist = repos.find(repo => repo.id === data.id);
    
                if(!isExist){
                    setRepos(prev => [...prev, data])
                    setCurrentRepo('')
                    return;
                }
                alert("Repositório já foi adicionado anteriormente!")
                setCurrentRepo('')
                return;
            }
        }catch(error){
            alert("Repositório não encontrado!")
            setCurrentRepo('')
        }
    }

    const handleRemoveRepo = (id) =>{
        const res = repos.filter((repo) =>{
            return repo.id !== id;
        })
        setRepos(res)
    }

    return (
        <Container>
            <img src={ logo } width={ 72 } height={ 72 } alt="logo github"/>
            <Input value={ currentRepo } onChange={ (e) => setCurrentRepo(e.target.value) }/>
            <Button onClick={ handleSearchRepo }/>
            {/* Exibindo os repositorios com map */}
            { repos.map(repo => <ItemRepo repo={ repo } handleRemoveRepo={ handleRemoveRepo }/>) }
        </Container>
    );
  }
  
  export default Home;
  