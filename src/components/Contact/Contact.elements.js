import styled from 'styled-components';
import { colors } from '../../golbal-styles/colors';

export const ListSocialNetworks = styled.ul`
    display: flex;
    list-style: none;
`;

export const ItemSocialMedia = styled.li`
    margin: 0 2rem;
    font-size: 2rem;
    
    cursor: pointer;
    
    transition: color .3s ease;

    a{
        color: rgba(255,255,255,.8);
        &:hover{
            color: ${colors.blueText};
            outline: none;
        }
    }

    @media screen and (max-width: 668px){
        margin: 0 1.5rem;
    }

    @media screen and (max-width: 450px){
        margin: 0 .5rem;
    }

`;

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 1.5rem;
        color: white;//${colors.blueText};
        margin: 3rem 0;
        text-align: center; 
    }
    img{
        max-width: 15rem;
    }
`;