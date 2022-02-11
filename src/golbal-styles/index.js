import styled from 'styled-components';
const colorMain = '#161c24';

export const ContainerSection = styled.section`
    display: grid;
    height: 92vh;
    width: 85vw;
    margin: 0 auto;
    color:white;
    
    transition: width .3s ease;
    animation-name: opacity;
    animation-duration: 1s;
    //animation-iteration-count: 5;
    @media screen and (max-width: 960px){
        width: 90%;
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
        font-weigth: 200;
        font-style: italic;
        font-size: 2rem;
        letter-spacing: .5px;
        margin-top: 3rem;
    }

`;

export const H1 = styled.h1`
    font-size: 2rem;
`;