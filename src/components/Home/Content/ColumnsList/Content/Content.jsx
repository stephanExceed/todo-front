import React from 'react';

import {
    Wrapper,
    ColumnsList,
    AddColumn,
    Icon,
    Title,
    AddColumnForm,
    AddColumnInput
} from './Content.elements';

import Column from './Column/Column';
import { connect } from 'react-redux'
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io'

class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showAddColumnForm: false,
            newColumnTitle: ''
        }

        this.hideAddColumnForm = this.hideAddColumnForm.bind(this)
        this.showAddColumnForm = this.showAddColumnForm.bind(this)
    }

    hideAddColumnForm(e) {
        e.stopPropagation()
        this.setState({
            showAddColumnForm: false
        })
    }

    showAddColumnForm(e) {
        e.stopPropagation()
        this.setState({
            showAddColumnForm: true
        })
    }


    render() {
        console.log(this.props)
        return (
            <Wrapper>
                <ColumnsList>
                    {this.props.columns.map(item => {
                        return (
                            <Column 
                                key={item.id}
                                column={item}
                            />
                        )
                    })}
                </ColumnsList>
                {this.state.showAddColumnForm ?
                    <AddColumnForm onSubmit={e => {
                            e.preventDefault();
                            this.props.submitNewColumn(
                                e,
                                this.state.newColumnTitle,
                                this.hideAddColumnForm
                            )
                        }}>
                        <Icon>
                            <IoMdArrowDropright />
                        </Icon>
                        <AddColumnInput 
                            autoFocus
                            placeholder='New column'
                            onChange={e => {
                                this.setState({
                                    newColumnTitle: e.target.value
                                })
                            }}
                        />
                    </AddColumnForm>
                    :
                    <AddColumn onClick={this.showAddColumnForm}>
                        <Icon>
                            <AiOutlinePlus />
                        </Icon>
                        <Title>
                            Add Column
                        </Title>
                    </AddColumn>
                }
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
        submitNewColumn:  (e, title, hideAddColumnForm) => {
            dispatch({
                type: 'ADD_COLUMN',
                payload: {
                    id:  Math.floor(Math.random() * 100),
                    title: title
                }
            })
            hideAddColumnForm(e);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);