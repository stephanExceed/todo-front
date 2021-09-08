import React from 'react';

import {
    Wrapper
} from './Task.elements';

class Task extends React.Component {
    render(){
        return (
            <Wrapper>
                {this.props.task.title}
            </Wrapper>
        )
    }
}

export default Task;