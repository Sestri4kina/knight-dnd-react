import React, { Component } from 'react';
import Board from './components/Board';


class App extends Component {
  render() {
    return (
      
        <Board knightPosition={[5, 5]} />
      
    );
  }
}

export default App;
