import styled from 'styled-components';
import { colors } from '../../golbal-styles/colors';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    text-align: center;
    margin: .4rem .4rem;
    text-transform: capitalize;
    
    span{
        margin: 0;
        font-size: 1rem;
        line-height: 8px;
    }
    svg{
        font-size: 3rem;
        margin: 0 1rem;
        // fill: ${colors.main};
    }
`;