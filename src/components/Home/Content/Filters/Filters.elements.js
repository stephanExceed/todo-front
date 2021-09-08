import styled from 'styled-components';

export const Wrapper = styled.div`
    border-bottom: 1px solid #E8ECEE;
    padding-top: 10px;
`

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
`

export const MenuItem = styled.li`
    cursor: pointer;
    padding-bottom: 10px;
    color: ${props => props.active ? 'rgb(2, 158, 197)' : ' #6f7782'};
    margin-right: 10px;
    transition-duration: .2s;
    border-bottom: ${props => props.active && '2px solid rgb(2, 158, 197)'};

        &:hover {
            color: #151b26;
            border-bottom: 1px solid #151b26;;
        }
`