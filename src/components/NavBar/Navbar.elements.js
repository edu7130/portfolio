import styled from 'styled-components';
import { colors } from '../../golbal-styles/colors';
const colorMain = '#161c24'
//#23394d
export const Container = styled.div`
    width: 100%;
    height: 8vh;
    background-color: ${colorMain};
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;


export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: sans-serif;
    
    
    p{
        &:nth-child(2){
            color: #fff;
        }
        &:nth-child(3){
            font-size: 1.5rem;
            font-weigth: 500;
            color: #e07924;
        }
    }
    svg{
        fill: #e07924;
        margin-right: 0.5rem;
    }
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    
    @media screen and (max-width: 960px){
        background-color: ${colorMain};
        //border-right: 1px solid rgba(255,255,255,.1);
        position: absolute;
        top: 7.9vh;
        left: ${({ open }) => open ? "0" : "-40%"};
        width: 40%;
        height: 92.1vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: .5s all ease;
        z-index: 5;
    }
    @media screen and (max-width: 668px){
        left: ${({ open }) => open ? "0" : "-70%"};
        width: 50%;
    }
`;

export const MenuItem = styled.li`
    height: 100%;

    a{
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0.5rem 2.5rem;
        color: ${colors.blueText};
        font-family: sans-serif;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: 0.9s all ease;

        &:hover{
            color: #fff;
            background-color: #e0792a;
            transition: .5s all ease;
        }

        @media screen and (max-width: 960px){
            width:100%;
        }
    }

    @media screen and (max-width: 960px){
        width:100%;
        height: 70px;
        display:flex;
        justify-content: center;
        align-items:center;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    background-color: transparent;
    
    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        cursor: pointer;
        svg{
            fill: #e07924;
            margin-right: 0.5rem;
        }
    }
`;

export const Background = styled.div`
    display: ${({active})=> active ? 'block' : 'none'};
    position: absolute;
    top: 8vh;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
`;