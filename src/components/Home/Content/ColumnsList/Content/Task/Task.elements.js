import styled from 'styled-components';

export const Wrapper = styled.div`
    border-bottom: 1px solid #E8ECEE;
    padding: 5px 0;
    padding-left: 30px;
    display: flex;
    align-items: center;
`

export const Icon = styled.div`
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid  #E8ECEE;
    margin-right: 10px;
    background-color: ${props => props.done && '#25e8c8'};
    cursor: pointer;
`
export const Title = styled.div`
    text-decoration: ${props => props.done && 'line-through'};
`

export const RightIcon = styled.div`
    /* display: ${props => props.active ? 'block' : 'none'}; */
    visibility: ${props => props.active ? 'visible' :  'hidden'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    color: #6f7782;
    cursor: pointer;
    padding: 4px;
    border-radius: 6px;
    position: ${props => props.relative && 'relative'};

        &:hover {
            color: #151b26;
            background-color: rgba(21, 7, 38, 0.04);
        }
`