import styled from 'styled-components';
import { colors } from '../../golbal-styles/colors';

export const ListSocialNetworks = styled.ul`
    display: flex;
    list-style: none;
`;

export const ItemSocialMedia = styled.li`
    margin: 0 2rem;
    font-size: 2rem;
    color: rgba(255,255,255,.8);//${colors.main};
    cursor: pointer;

    transition color .3s ease;

    &:hover{
        color: ${colors.blueText};
    }

    @media screen and (max-width: 960px){
        margin: 0 1.5rem;
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
        max-width: 20rem;
    }
`;