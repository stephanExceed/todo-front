import React from 'react';

import {
    Wrapper,
    Title,
    Icon,
    TasksList,
    AddTask,
    AddTaskForm,
    AddTaskInput,
    EditColumnForm,
    EditColumnInput
} from './Column.elements';

import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
import { BsThreeDots, BsPlus} from 'react-icons/bs';
import Task from '../Task/Task';
import { connect } from 'react-redux';

class Column extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            showTasks: false,
            showAddTaskForm: false,
            showEditColumnForm: false,
            newTaskTitle: '',
            EditedColumnTitle: ''
        }

        this.toggleShowTasks = this.toggleShowTasks.bind(this)
        this.showAddTaskForm = this.showAddTaskForm.bind(this)
        this.hideAddTaskForm = this.hideAddTaskForm.bind(this)
        this.showEditColumnForm = this.showEditColumnForm.bind(this)
        this.hideEditColumnForm = this.hideEditColumnForm.bind(this)
    }
    
    toggleShowTasks(){
        this.setState({
            showTasks: !this.state.showTasks
        })
    }

    showAddTaskForm(e){
        e.stopPropagation()
        this.setState({
            showAddTaskForm: true
        })
    }

    hideAddTaskForm(e){
        e.stopPropagation()
        this.setState({
            showAddTaskForm: false
        })
    }

    showEditColumnForm(e){
        e.stopPropagation()
        this.setState({
            showEditColumnForm: true
        })
    }

    hideEditColumnForm(e){
        e.stopPropagation()
        this.setState({
            showEditColumnForm: false
        })
    }

    render() {
        return (
            <>
            <Wrapper onClick={
                this.hideAddTaskForm,
                this.hideEditColumnForm
            }>
                <Icon onClick={this.toggleShowTasks}>
                    {!this.state.showTasks ?
                        <IoMdArrowDropright />
                        :
                        <IoMdArrowDropdown />
                    }
                </Icon>
                {this.state.showEditColumnForm ?
                    <EditColumnForm onClick={e => {
                        e.stopPropagation()
                    }}
                        onSubmit={e => {
                            e.preventDefault()
                            this.props.editColumnTitle(
                                e,
                                this.props.column.id,
                                this.state.EditedColumnTitle,
                                this.hideEditColumnForm
                            )
                        }
                        }
                    >
                        <EditColumnInput 
                            autoFocus
                            onChange={e => 
                                this.setState({
                                    EditedColumnTitle: e.target.value
                                })
                            }
                        />
                    </EditColumnForm>
                    :
                    <Title onClick={this.showEditColumnForm}>
                        {this.props.column.title}
                    </Title>
                }
            </Wrapper>
            {this.state.showTasks &&
            <>
                <TasksList>
                    {this.props.tasks.map(item => {
                        if(item.columnId === this.props.column.id) {
                            return(
                                <Task 
                                    key={item.id}
                                    task={item}
                                />
                            )
                        }
                    })}
               </TasksList>
                {this.state.showAddTaskForm ?
                    <AddTaskForm onClick={e => e.stopPropagation()}
                        onSubmit={e => {
                            e.preventDefault()
                            this.props.submitNewTask(
                                e,
                                this.state.newTaskTitle,
                                this.props.column.id,
                                this.hideAddTaskForm
                            )
                        }}
                    >
                        <AddTaskInput 
                            placeholder='New task'
                            autoFocus
                            onChange={e => this.setState({
                                newTaskTitle: e.target.value
                            })}
                        />
                    </AddTaskForm>
                    :
                    <AddTask onClick={this.showAddTaskForm}>
                        Add Task...
                    </AddTask>
                }
            </>
            }
            </>
        )
    }
}

const mapStatetoProps = state => {
    return {
        tasks: state.tasks.tasks
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        submitNewTask: (e, title, columnId, hideAddTaskForm) => {
            console.log(columnId)
            dispatch({
                type: 'ADD_TASK',
                payload: {
                    id:  Math.floor(Math.random() * 100),
                    title: title,
                    columnId: columnId,
                    status: false
                }
            })
            hideAddTaskForm(e)
        },
        editColumnTitle: (e, id, title, hideEditColumnForm) => {
            e.preventDefault()
            dispatch({
                type: 'EDIT_COLUMN_TITLE',
                payload: {
                    id: id,
                    title: title
                }
            })
            hideEditColumnForm(e)
        }
    }
}



export default connect(mapStatetoProps, mapDispatchtoProps)(Column);