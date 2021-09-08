import React from 'react';


import {
    Wrapper 
} from './Sidebar.elements';


import { connect } from 'react-redux'


class Sidebar extends React.Component {
    
    render() {
        console.log(this.props.showSidebar)

        return (
            <Wrapper active={this.props.showSidebar}>

            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showSidebar: state.UI.showSidebar
    }
}

export default connect(mapStateToProps)(Sidebar);