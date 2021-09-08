import React from 'react';

import { 
    Wrapper
} from './ColumnsList.elements';

import Header from './Header/Header';
import Content from './Content/Content'

class ColumnsList extends React.Component {
    render() {
        return (
            <Wrapper>
                <Header />
                <Content />
            </Wrapper>
        )
    }
}

export default ColumnsList;