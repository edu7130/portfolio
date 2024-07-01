import styled from 'styled-components';

import { colors } from '../../golbal-styles/colors';

export const Content = styled.article`
    display: flex;
    position: relative;
    aspect-ratio: 16/10;
    width: 100%;
    height: 100%;
    
    background-color: #2B425AD7;
    
    background-image: url(${({ urlImage }) => urlImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    border-radius: 10px;
    overflow: hidden;

    transition-property: zoom;
    transition-duration: 3s;
    
    
`;


export const Info = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr min-content;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${colors.dark + '80'};
    backdrop-filter: blur(5px);

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    padding-bottom: 1rem;
    

    bottom: ${({ show }) => show ? '0' : '-100%'};


    transition: all .5s ease;

    h3{
        text-align: center;
        color: ${colors.main};
        font-size: 2rem;
        letter-spacing: 1px;
        margin: auto 0;
    }

    p{
        text-align: center;
        margin: 0 1rem;
    }


`;

export const RowLinks = styled.div`
    display: grid;
    grid-template-columns: ${({ priv }) => priv ? '1fr' : '1fr 1fr'};
    justify-content: center;//${({ priv }) => priv && 'center'};
`;

export const LinkProject = styled.a`
    display: flex;
    background-color: ${colors.main};
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: .5rem 1rem;
    border-radius: 2rem;

    text-decoration: none;
    font-weight: 600;
    color: ${colors.dark};

    svg{
        font-size: 1.5rem;
    }
    p{
        margin-left: 8px;
    }
`;