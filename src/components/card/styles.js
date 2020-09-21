import styled from 'styled-components';
import Colors, { Opacity } from '../../styles/colors';

export const Box = styled.div`
    background-color: ${Colors.white};
    border-radius: 8px;
    box-shadow: 0 0 12px -4px ${Colors.black + Opacity.op20};
    margin: 12px;
    padding: 12px;
    transition: 0.15s ease-in-out;
    width: 100%;

    &:hover {
        transform: scale(1.1);
    }
`;
