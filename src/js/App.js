/*
Pierre Menard

An interactive LSTM example
Cristóbal Valenzuela
cv965@nyu.edu
*/

import React, { Component } from 'react';
import Tooltip from './Tooltip';
import TopBar from './TopBar';
import Mobile from './Mobile';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

class App extends Component {
  constructor() {
    super();
    this.state = {
      models: [
        {name: 'Shakespear', path: './models/shakespear/'},
        {name: 'Darwin', path: './models/darwin/'},
      ],
      selectedModel: './models/shakespear/'
    }
  }

  handleClick(model){
    this.setState({
      selectedModel: model.path
    })
  }

  render() {
    let isMobile = md.mobile();
    return (
      <div>
      {!isMobile ? 
        <div className="App">
          <TopBar/>
          {isSafari ? <div id="safari">Please try this demo in Chrome or Firefox</div> : null}
          <Tooltip/>
        </div>
      : <Mobile/>}
      </div>
    );
  }
}

export default App;