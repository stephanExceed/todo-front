import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 240px;
    margin-left: ${props => props.active ? '0' : '-240px'};
    transition: margin-left 250ms ease-out,transform 250ms ease-out;
    background-color: #151B26;
    height: 100%;
`