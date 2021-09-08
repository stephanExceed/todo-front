import React from 'react';

import {
    Wrapper,
    Icon,
    Title,
    RightIcon
} from './Task.elements';

import { MdDone } from 'react-icons/md';
import { BsThreeDots, BsPlus, BsArrowUpDown} from 'react-icons/bs';
import { connect } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import MoveTaskModal from '../../MoveTaskModal/MoveTaskModal';



class Task extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isHovered: false,
            showMoveTaskModal: false
        }
    }
    render() {
        console.log(this.props.task)
        return (
            <Wrapper onMouseEnter={() => this.setState({
                    isHovered: true
                })}
                onMouseLeave={() => this.setState({
                    isHovered: false
                })}
                onClick={e => {
                    e.stopPropagation()
                    this.setState({
                        showMoveTaskModal: false
                    })
                }}
            >
                <Icon onClick={() => {
                        this.props.toggleStatus(this.props.task.id)
                    }}
                    done={this.props.task.status}
                >
                    <MdDone />
                </Icon>
                <Title done={this.props.task.status}>
                    {this.props.task.title}
                </Title>
                <RightIcon active={this.state.isHovered}>
                    <BsThreeDots />
                </RightIcon>
                <RightIcon active={this.state.isHovered}>
                    <BsPlus />
                </RightIcon>
                <RightIcon active={this.state.isHovered}
                >
                    <AiOutlineDelete  onClick={() => this.props.deleteTask(this.props.task.id)}/>
                </RightIcon>
                <RightIcon active={this.state.isHovered}
                    relative={true}
                >
                    <BsArrowUpDown 
                        onClick={(e) => {
                            e.stopPropagation()
                            this.setState({
                            showMoveTaskModal: true
                        })}}
                    />
                </RightIcon>
                {this.state.showMoveTaskModal &&
                    <MoveTaskModal 
                        task={this.props.task}
                    />
                }
            </Wrapper>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggleStatus: (id) => {
            dispatch({
                type: 'TOGGLE_STATUS',
                payload: id
            })
        },
        deleteTask: (id) => {
            dispatch({
                type: 'DELETE_TASK',
                payload: id
            })
        }
    }
}



export default connect(null, mapDispatchToProps)(Task);