import React from 'react';

import './../css/Tooltip.css';

class Tooltip extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      message: 'Show Tooltip',
      style: {
        height: '20px'
      }
    }
  }

  onChange(e){
    console.log(e)
  }

  handleShowHide(){
    let status = !this.state.show;
    let height = '20px';
    status && (height = '170px');
    this.setState({
      show: status,
      style: {
        height: height
      }
    })
  }

  render(){
    let msg = 'Show Tooltip';
    this.state.show && (msg = 'Hide Tooltip');
    return(
      <div id="Tooltip" style={this.state.style}>
        <div id="showHide" onClick={()=>{this.handleShowHide()}}>
        <img alt="Show Tooltip" src="images/dots.png" id="dots"/> 
        </div>
        {this.state.show ?
          <div id="iconsAndImages" >
            <div id="explanation">
              <p>
                This is an experimental text editor that uses machine learning models <a href="https://github.com/sherjilozair/char-rnn-tensorflow" target="_blank">(char-rnn)</a> trained on the works of different authors. Whenever you type, the editor suggests a possible continuation based on what you wrote. You can change the suggestion with the right arrow key and add that suggestion with the tab key.
              </p>
            </div>
            <div id="icons">
              <div id="right" className="tooltipOption">
                <img src="images/right.png" className='tooltipImage' alt="right"/>
                <p>Right Click: Regenerate</p>
              </div>
              <div id="tab" className="tooltipOption">
                <img src="images/tab.png" className='tooltipImage' alt="tab"/>
                <p>Tab: Add Suggestion</p> 
              </div>
              <div id="esc" className="tooltipOption">
                <img src="images/esc.png" className='tooltipImage' alt="esc"/>
                <p>Esc: Cancel Suggestion</p> 
              </div>
            </div>
            <div id="credits">
              <p>Made by <a href="http://cvalenzuelab.com">Cristóbal Valenzuela</a></p>
              <p><a href="https://github.com/cvalenzuela/Selected_Stories">Get the code</a></p>
              <p>Built with <a href="https://deeplearnjs.org/">deeplearn.js</a> and <a href="https://github.com/ITPNYU/p5-deeplearn-js">p5ml.js</a></p>
            </div>
          </div>
        : null}
      </div>
    )
  }
}

export default Tooltip;