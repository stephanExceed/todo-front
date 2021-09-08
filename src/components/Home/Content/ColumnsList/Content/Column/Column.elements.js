import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
`
export const Title = styled.div`
    text-transform: capitalize;
    color: #151b26;
    font-size: 22px;
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

        &:hover {
            background-color: rgba(21, 7, 38, 0.04);
            color: #151b26;
        }
`

export const TasksList = styled.div`

`

export const AddTask = styled.div`
    color: #6f7782;
    padding-left: 30px;
    margin-top: 15px;
`
export const AddTaskForm = styled.form`
    padding-left: 30px;
`

export const AddTaskInput = styled.input`
    
`

export const EditColumnForm = styled.form`

`

export const EditColumnInput = styled.input`

`
