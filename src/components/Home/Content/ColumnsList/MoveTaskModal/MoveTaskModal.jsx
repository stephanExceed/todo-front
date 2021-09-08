import React from 'react';
import {
    Wrapper,
    Column
} from './MoveTaskModal.elements';

import { connect } from 'react-redux';

class MoveTaskModal extends React.Component {
    
    render() {

        console.log('rerer', this.props)
        return (
            <Wrapper onClick={e => {
                e.stopPropagation()
            }}>
                {this.props.columns.map(item => {
                    return (
                        <Column key={item.id}
                            onClick={() => {
                                console.log('clicked')
                                this.props.moveTask(this.props.task.id, this.props.task.columnId)
                            }}
                        >
                            {item.title}
                        </Column>
                    )
                })}
            </Wrapper>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        columns: state.tasks.columns
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveTask: (taskId, columnId) => {
            dispatch({
                type: 'MOVE_TASK',
                payload: {
                    taskId: taskId,
                    columnId: columnId
                }
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MoveTaskModal);