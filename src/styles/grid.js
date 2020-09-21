import styled from 'styled-components';
import { device } from './device';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: ${props => (props.xsMaxWidth ? props.xsMaxWidth : '100%')};
    padding-left: 16px;
    padding-right: 16px;

    display: ${props => props.flex && 'flex'};
    align-items: ${props => props.valign && props.valign};
    justify-content: ${props => props.halign && props.halign};

    @media ${device.sm} {
        max-width: ${props => (props.smMaxWidth ? props.smMaxWidth : '540px')};
    }
    @media ${device.md} {
        max-width: ${props => (props.mdMaxWidth ? props.mdMaxWidth : '720px')};
    }
    @media ${device.lg} {
        max-width: ${props => (props.lgMaxWidth ? props.lgMaxWidth : '960px')};
    }
    @media ${device.xl} {
        max-width: ${props => (props.xlMaxWidth ? props.xlMaxWidth : '1140px')};
    }
`;

function getWidthGrid(value) {
    if (!value) return;

    switch (value) {
        case 'auto':
            return `flex: 0 0 auto; max-width: none; width: auto;`;

        case 'flex':
            return `flex-basis: 0; flex-grow: 1; max-width: 100%;`;

        default:
            let width = (value / 12) * 100;
            return `max-width: ${width}%; flex: 0 0 ${width}%;`;
    }
}

export const Col = styled.div`
    min-height: 1px;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    width: 100%;

    ${({ xs }) => xs && getWidthGrid(xs)}

    @media ${device.sm} {
        ${({ sm }) => sm && getWidthGrid(sm)}
    }

    @media ${device.md} {
        ${({ md }) => md && getWidthGrid(md)}
    }

    @media ${device.lg} {
        ${({ lg }) => lg && getWidthGrid(lg)}
    }

    @media ${device.xl} {
        ${({ xl }) => xl && getWidthGrid(xl)}
    }
`;
