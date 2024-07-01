import styled from 'styled-components';


export const Article = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    height: 100%;
    min-height: 70%;
    margin: auto;
    padding: 2rem 1rem;
    color: ${({ color }) => color};
    border-radius: 2rem;
    background-color: ${({ bgColor }) => bgColor};
    background-image: ${({ bgImg }) => bgImg && `url(${bgImg})`};
    background-repeat: no-repeat;
    background-size: cover;
    
    
    h2{
        color: rgba(255,255,255,.8);
        display: flex;
        margin: 0 1.5rem;
        font-size: 1.7rem;
        align-items: center;
        justify-content: end;

        svg{
            margin-right: 10px;
            font-size: inherit;
        }
    }

    hr{
        margin-bottom: 1rem;
        margin-top: .5rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 1.5rem;
        letter-spacing: .5px;
    }
    img{
        width: 70%;
        margin: auto;
        margin-top: 1rem;
    }


`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    margin: auto 0;
    

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column-reverse;
        row-gap: 1rem;
        padding: 1rem 2rem;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 0 .5rem;
    justify-content: center;
    list-style: none;
`;

export const ListItem = styled.li`
    margin-top: 1rem;
`;

