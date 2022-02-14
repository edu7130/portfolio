import styled from 'styled-components';
import { colors } from './colors';
const colorMain = '#161c24';

export const ContainerSection = styled.section`
    display: grid;
    height: 92vh;
    width: ${({width})=> width ? width : '85%'};
    margin: 0 auto;
    color:white;
    overflow-y: ${({scroll})=> scroll && 'scroll'};
    
    transition: width .3s ease;

    animation-name: opacity;
    animation-duration: 1s;

    &::-webkit-scrollbar{
        display: none;
    }

    @media screen and (max-width: 960px){
        width: 90%;
        padding-bottom: ${({scroll})=> scroll && '5rem'};
    }

    @media screen and (max-width: 768px){
        width: 95%;
    }

    @media screen and (max-width: 568px){
        width: 97%;
    }

    @keyframes opacity {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

`;

export const Main = styled.main`
    width: 100vw;
    height: ${({height})=> height ? height : '92vh'};
    background-color: ${colorMain};
`;

export const Center = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ErrorContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    //background-color: red;
    img{
        max-width: 20rem;
    }

    h2{
        font-family: sans-serif;
        font-style: italic;
        font-size: 2rem;
        letter-spacing: .5px;
        margin-top: 3rem;
    }

`;

export const H1 = styled.h1`
    font-size: 2rem;
`;

export const LinkContainer = styled.span`
    margin-top: 1rem;
    align-self: ${({alignSelf})=> alignSelf};
    column-gap: ${({cg})=> cg};
    a{
        column-gap: ${({cg})=> cg};
        color: ${colors.dark};
        background-color: ${colors.main};
        padding: .5rem 1rem;    
        border-radius: 2rem;
        font-size: 1rem;
        text-decoration: none;
        font-weight: 600;
        
        svg{
            margin-right: .5rem;
        }
    }
`;