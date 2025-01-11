import styled from 'styled-components'

export const ItemContainer = styled.div`
    width: 80%;
    height: auto;

    h3{
        font-size: 2rem;
        color: #FAFAFA;
    }

    p{
        font-size: 1rem;
        color: #FAFAFA60;
        margin-bottom: .75rem;
    }

    a.remover{
        color: #FF0000;
        margin-top: .75rem;
    }

    a.remover:hover{
        opacity: .8;
    }

    a.repositorio{
        color: #FFFFFF80;
    }

    a.repositorio:hover{
        color: #0000FF80;
    }

    hr{
        color: #FAFAFA60;
        margin: .75rem 0;
    }
`