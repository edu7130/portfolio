import styled from 'styled-components';

export const ProjectList = styled.ul`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    gap: .5rem;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 960px){
        grid-template-columns: 1fr;
    }
`;

export const ProjectItem = styled.li`
    list-style: none;
    width: 100%;
    @media screen and (max-width: 960px){
        //width: 60%;
    }
`;


