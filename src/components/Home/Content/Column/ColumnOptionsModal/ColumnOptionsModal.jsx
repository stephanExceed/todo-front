import React from "react";

import {
    Wrapper,
    Option,
    OptionTitle,
    Icon
} from './ColumnOptionsModal.elements';


import { AiOutlineDelete,AiOutlineEdit } from 'react-icons/ai';
import { connect } from 'react-redux';

class ColumnOptionsModal extends React.Component {
    render() {

        console.log(this.props)
        return (
            <Wrapper onClick={e => {
                e.stopPropagation()
            }}>
                <Option onClick={(e) => {
                    this.props.showEditForm(e)
                    this.props.hideColumnOptionsModal(e)
                }}>
                    <Icon>
                        <AiOutlineEdit />
                    </Icon>
                    <OptionTitle>
                        Rename Column
                    </OptionTitle>
                </Option>
                <Option delete={true}>
                    <Icon>
                        <AiOutlineDelete />
                    </Icon>
                    <OptionTitle onClick={(e) => {
                        this.props.deleteColumn(this.props.id)
                    }}>
                        Delete Column
                    </OptionTitle>
                </Option>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteColumn: (id) => {
            dispatch({
                type: 'DELETE_COLUMN',
                payload: id
            })
        }
    }
}
  

export default connect(null, mapDispatchToProps)(ColumnOptionsModal);