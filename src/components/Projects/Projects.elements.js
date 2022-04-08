import styled from 'styled-components';

export const ProjectList = styled.ul`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    gap: .5rem;
    align-items: center;
    justify-content: center;
    animation: op 1s;

    @media screen and (max-width: 960px){
        grid-template-columns: 1fr;
    }
    @keyframes op{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;

export const ProjectItem = styled.li`
    list-style: none;
    width: 100%;
    @media screen and (max-width: 960px){
        //width: 60%;
    }
`;


export const ProjectListEmpty = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content:center;
    p{
        font-size: 3rem;
        color: white;
    }
`;

