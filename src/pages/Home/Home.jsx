import React from 'react';


import {
    Wrapper,
    WrapperInner
} from './Home.elements'


import Header from '../../components/Home/Header/Header';
import Sidebar from '../../components/Home/Sidebar/Sidebar';
import Content from '../../components/Home/Content/Content';

class Home extends React.Component {


    render() {
        return (
            <Wrapper>
                <Header />
                <WrapperInner>
                    <Sidebar />
                    <Content />
                </WrapperInner>
            </Wrapper>
        )
    }
}

export default Home;