import styled from 'styled-components';
import { colors } from '../../golbal-styles/colors';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
    text-align: center;
    text-transform: capitalize;
    
    span{
        margin: 0;
        font-size: .9rem;
        line-height: 8px;
    }
    svg{
        font-size: 3rem;
        margin: 0 1rem;
        fill: ${colors.main};
    }
`;