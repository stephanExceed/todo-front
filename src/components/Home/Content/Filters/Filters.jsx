import React from 'react';

import {
    Wrapper,
    MenuItem,
    Menu
} from './Filters.elements';

import { connect } from 'react-redux'

class Filters extends React.Component {
    render() {
        return (
            <Wrapper>
                <Menu>
                    <MenuItem
                        onClick={() => {this.props.changeDisplayMethod('list')}} 
                        active={this.props.displayMethod === 'list'}
                    >
                        List
                    </MenuItem>
                    <MenuItem 
                        onClick={() => {this.props.changeDisplayMethod('board')}}
                        active={this.props.displayMethod === 'board'}
                    >
                        Board
                    </MenuItem>
                </Menu>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeDisplayMethod: (displayMethod) => {
            dispatch({
                type: 'CHANGE_DISPLAY_METHOD',
                payload: displayMethod
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        displayMethod: state.UI.displayMethod
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filters);