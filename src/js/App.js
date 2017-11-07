/*
Pierre Menard

An interactive LSTM example
Cristóbal Valenzuela
cv965@nyu.edu
*/

import React, { Component } from 'react';
import TextEditor from './Editor';
import TopBar from './TopBar';
import Tooltip from './Tooltip';

class App extends Component {
  constructor() {
    super();
    this.state = {
      models: [
        {name: 'Shakespear', path: './models/shakespear/'},
        {name: 'Darwin', path: './models/darwin/'},
      ],
      selectedModel: './models/shakespear/',
    }
  }

  handleClick(model){
    this.setState({
      selectedModel: model.path
    })
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <TextEditor />
        <Tooltip />
      </div>
    );
  }
}

export default App;