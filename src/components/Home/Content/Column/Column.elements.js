import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 304px;
    padding: 10px 10px;
    margin-right: 20px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.div`
    color: #151b26;
    text-transform: capitalize;
`

export const IconsWrapper = styled.div`
    display: flex;
    position: relative;
`

export const Icon = styled.div`
    padding: 5px;
    color: #6f7782;
    cursor: pointer;
    border-radius: 6px;
    height: 28px;
    min-height: 28px;
    min-width: 28px;
    width: 28px;
    display: flex;
    align-items: center;
    justify-content: center;

        &:hover {
            color: #151b26;
            background-color: rgba(21, 7, 38, 0.04);
        }
`

export const Form = styled.form`

`

export const Input = styled.input`

`

export const TasksList = styled.div`
    min-height: 500px;
    background-color: rgba(232, 236, 238, 0.5);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AddTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #6f7782;

        &:hover {
            background-color: rgba(21, 7, 38, 0.04);
            color: #151b26;
        }
`


export const AddTaskForm = styled.form`
    margin-top: 5px;
`

export const AddTaskInput = styled.input`
    height: 50px;
    border: 1px solid #E8ECEE;
    background-color: white;
    outline: none;
    border-radius: 6px;
`