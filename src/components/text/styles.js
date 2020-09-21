import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Txt = styled.p`
    color: ${props => (props.color ? props.color : Colors.grey)};
    font-size: ${props => (props.size ? props.size : 16)}px;
    font-weight: ${props => props.weigth && props.weigth};
    margin-bottom: ${props => props.mb && props.mb + 'px'};
    margin-top: ${props => props.mt && props.mt + 'px'};
    text-align: ${props => props.align && props.align};
    text-transform: ${props => props.uppercase && 'uppercase'};
`;
