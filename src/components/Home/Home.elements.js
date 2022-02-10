import styled from 'styled-components';
import { colors } from '../../golbal-styles/colors';

export const HomeContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 960px){
        display: grid;
        grid-template-columns: repeat(1fr);
        //flex-direction: column;
        //justify-content: center;
        //align-items: center;
        img{
            margin: 0 auto;
            margin-top: 0rem;

            width: 90%;
        }
    }
`;

export const MeDescription = styled.div`
    p{
        font-size: 3.2rem;
        color: ${colors.main};
        font-weight: bold;
    }
    h1{
        font-size: 4rem;
    }
    h3{
        margin-top: 1rem;
        font-size: 1.7rem;
        color: rgba(255,255,255,.5);
    }
    h4{
        margin-top: 3rem;
        font-size: 1.3rem;
        letter-spacing: .5px;
        font-weigth: regular;
        color: rgba(255,255,255,.6)
    }

    @media screen and (max-width: 960px){
        padding-left: 1.5rem;
        padding-right: 1.5rem;

        h1{
            font-size: 3rem;
        }
        h3{
            font-size: 2rem;
        }
        h4{
            font-size: 1rem;
            margin-top: 1rem;
        }
    }

    //@media screen and (max-width: 668px){
    //    h1{
    //        font-size: 2.5rem;
    //    }
    //    h3{
    //        font-size: 1.5rem;
    //    }
    //    h4{
    //        font-size: 1rem;
    //        margin-top: 1rem;
    //        //text-align: justify;
    //    }
    //}

`;