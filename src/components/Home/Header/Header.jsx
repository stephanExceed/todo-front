import React from 'react';
import {
    Avatar,
    Wrapper,
    Icon
} from './Header.elements';


import { FaBars } from 'react-icons/fa'
import { connect } from 'react-redux'



class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false
        }
    }


    render() {

        console.log(this.props)
        return (
            <Wrapper>
                <Icon onClick={this.props.toggleSidebar}>
                    <FaBars />
                </Icon>
                <Avatar>

                </Avatar>
                {this.state.name}
            </Wrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidebar: () => dispatch({
                type: 'TOGGLE_SIDEBAR'
            })
    }
}

export default connect(null, mapDispatchToProps)(Header);