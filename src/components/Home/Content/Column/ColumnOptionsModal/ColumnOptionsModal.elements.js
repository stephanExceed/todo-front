import styled from 'styled-components';

export const Wrapper = styled.div`
    box-shadow: 0 0 0 1px #e8ecee, 0 5px 20px 0 rgba(21, 7, 38, 0.08);
    width: 185px;
    background-color: #fff;
    padding: 5px 0px;
    position: absolute;
    top: 38px;
    left: 50px;
`

export const Option = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    color: ${props => props.delete && 'rgb(237, 71, 88)'};
    cursor: pointer;
    padding: 0 5px;

        &:hover {
            background-color: #e8ecee;
        }
`

export const OptionTitle = styled.div`

`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`