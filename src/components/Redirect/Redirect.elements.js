import styled from 'styled-components';
import { colors } from '../../golbal-styles/colors';

export const Content = styled.div`
    background-color: ${colors.main};
    border-radius: 2rem;
    color: ${colors.dark};
    text-align: center;
    justify-content: center;
    padding: 4rem;
    max-width: 30rem;
    
    animation: opacity 1s ;

    img{
        max-width: 20rem;
        margin: 0 auto;
    }
    h1{
        margin-bottom: 1rem;
    }
    a{
        color: ${colors.dark};
        font-size: 1.2rem;
        letter-spacing: .3px;
        text-decoration: underline;
        text-decoration-color: gery;
        margin-bottom: 1rem;

    }

    @media screen and (max-width: 960px){
        max-width: 60%;
        padding: 3rem;
    }
    @media screen and (max-width: 668px){
        max-width: 95%;
        padding: 1rem;
    }

    @keyframes opacity {
        from{
            opacity: 0;
        }
        to{
            opacity: 100%;
        }
    }
`;