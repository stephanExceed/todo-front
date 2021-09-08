import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 200px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 0 1px #e8ecee, 0 5px 20px 0 rgba(21, 7, 38, 0.08);
    position: absolute;
    top: 238px;
    left: 80px;
    z-index: 10;
`

export const Column = styled.div`
    padding-left: 5px;
    color: #151b26;
    padding: 10px 0;
    font-size: 22px;
    cursor: pointer;

        &:hover {
            background-color: #cbd4db;
        }
`