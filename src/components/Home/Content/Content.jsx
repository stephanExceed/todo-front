import React from 'react';

import {
    Wrapper,
    WrapperInner,
    ColumnsBoard,
    NewColumn,
    Title,
    Icon,
    Form,
    Input
} from './Content.elements';

import { connect } from 'react-redux';

import { MdAdd } from 'react-icons/md'
import Column from './Column/Column';
import ColumnsList from './ColumnsList/ColumnsList';
import Filters from './Filters/Filters'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAddColumnForm: false,
            newColumnName: ''
        }

        this.showForm = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
    }

    showForm(e)  {
        e.stopPropagation()
        this.setState({
            showAddColumnForm: true
        })
        
    }

    hideForm(e) {
        e.stopPropagation()
        this.setState({
            showAddColumnForm: false
        })
    }



    render() {
        {console.log(this.props)}
        return (
            <Wrapper onClick={this.hideForm}>
                <Filters />
                {this.props.displayMethod === 'board' ?
                    <WrapperInner>
                        <ColumnsBoard>
                            {this.props.columns.map(item => {
                                return (
                                    <Column 
                                        key={item.id}
                                        title={item.title}
                                        id={item.id}
                                    />
                                )
                            })}
                        </ColumnsBoard>
                        {this.state.showAddColumnForm ?
                            <Form onSubmit={(e) => this.props.submitForm(
                                    e, 
                                    this.state.newColumnName,
                                    this.hideForm
                                )}>
                                <Input 
                                    placeholder="new column"
                                    autoFocus
                                    onChange={e => this.setState({
                                        newColumnName: e.target.value
                                    })}
                                    onClick={e => e.stopPropagation()}
                                />
                            </Form>
                            :
                            <NewColumn onClick={this.showForm}>
                                <Icon>
                                    <MdAdd/>
                                </Icon>
                                <Title>
                                    Add new column
                                </Title>
                            </NewColumn>
                        }
                    </WrapperInner>
                    :
                    <ColumnsList />
                }
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
        columns: state.tasks.columns,
        displayMethod: state.UI.displayMethod
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (e, newColumnName, hideForm) => {
            e.preventDefault();
            dispatch({
                type: 'ADD_COLUMN',
                payload: {
                    id: Math.floor(Math.random() * 100),
                    title: newColumnName
                }
            })
            hideForm(e)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);