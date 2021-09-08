import React from 'react';

import {
    Wrapper,
    Header,
    Title,
    IconsWrapper,
    Icon,
    Form,
    Input,
    TasksList,
    AddTask,
    AddTaskForm,
    AddTaskInput
} from './Column.elements';

import { MdAdd } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { connect } from 'react-redux';
import Task from '../Task/Task';
import ColumnOptionsModal from './ColumnOptionsModal/ColumnOptionsModal';

class Column extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showEditForm: false,
            showAddTaskForm: false,
            showColumnOptionsModal: false,
            editedColumnTitle: '',
            newTaskTitle: ''
        }

        this.showForm = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
        this.showAddTaskForm = this.showAddTaskForm.bind(this)
        this.hideAddTaskForm = this.hideAddTaskForm.bind(this)
        this.showColumnOptionsModal = this.showColumnOptionsModal.bind(this)
        this.hideColumnOptionsModal= this.hideColumnOptionsModal.bind(this)
    }

    showForm(e) {
        e.stopPropagation()
        this.setState({
            showEditForm: true
        })
    }

    hideForm(){
        this.setState({
            showEditForm: false
        })
    }

    showAddTaskForm(e){
        e.stopPropagation();
        this.setState({
            showAddTaskForm: true
        })
    }

    hideAddTaskForm(e){
        e.stopPropagation();
        this.setState({
            showAddTaskForm: false
        })
    }
    

    showColumnOptionsModal(e) {
        e.stopPropagation()
        this.setState({
            showColumnOptionsModal: true
        })
    }

    hideColumnOptionsModal(e) {
        e.stopPropagation()
        this.setState({
            showColumnOptionsModal: false
        })
    }


    render() {

        console.log('props', this.props)
        return (
            <Wrapper onClick={(e) => {
                    this.hideAddTaskForm(e)
                    this.hideColumnOptionsModal(e)
                    this.hideForm(e)
                }   
            }>
                <Header>
                    {this.state.showEditForm ?
                        <Form
                            onSubmit={e => this.props.submitForm(
                                e, 
                                this.state.editedColumnTitle, 
                                this.hideForm, 
                                this.props.id
                                )}
                                onClick={e => e.stopPropagation()}
                        >
                            <Input 
                                placeholder='Edit column'
                                onChange={e => this.setState({
                                    editedColumnTitle: e.target.value
                                })}
                                autoFocus
                            />
                        </Form>
                        :
                        <Title onClick={this.showForm}>
                            {this.props.title}
                        </Title>
                    }
                    <IconsWrapper>
                        <Icon>
                            <MdAdd />
                        </Icon>
                        <Icon onClick={this.showColumnOptionsModal}>
                            <BsThreeDots />
                        </Icon>
                        {this.state.showColumnOptionsModal &&
                            <ColumnOptionsModal 
                                id={this.props.id}
                                showEditForm={this.showForm}
                                hideColumnOptionsModal={this.hideColumnOptionsModal}
                            />
                        }
                    </IconsWrapper>
                </Header>
                <TasksList>
                    {this.props.tasks.map(item => {
                        if(item.columnId === this.props.id) {
                            return (
                                <Task 
                                    key={item.id}
                                    task={item}
                                />
                            )
                        }
                    })}
                    <AddTask>
                        {this.state.showAddTaskForm ?
                                <AddTaskForm
                                    onClick={e => e.stopPropagation()}
                                    onSubmit={(e) => this.props.submitNewTask(
                                        e,
                                        this.state.newTaskTitle,
                                        this.props.id,
                                        this.hideAddTaskForm
                                    )}
                                >
                                    <AddTaskInput 
                                        placeholder='new task'
                                        autoFocus
                                        onChange={e => this.setState({
                                            newTaskTitle: e.target.value
                                        })}
                                    />
                                </AddTaskForm>
                            :
                            <>
                                <Icon>
                                    <MdAdd />
                                </Icon>
                                <Title onClick={this.showAddTaskForm}>
                                    Add Task
                                </Title>
                            </>
                        }
                    </AddTask>
                </TasksList>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (e, editedColumnName, hideForm, id) => {
            e.preventDefault();
            dispatch({
                type: 'EDIT_COLUMN_TITLE',
                payload: {
                    id: id,
                    title: editedColumnName
                }
            })
            hideForm(e)
        },

        submitNewTask: (e, title, columnId, hideAddTaskForm) => {
            e.preventDefault()
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
        }
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);