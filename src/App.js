import React from 'react';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home/Home'

class App extends React.Component {
  render () {
    return (
      <>
        <GlobalStyle />
        <Home />
      </>
    )
  }
}

export default App;
