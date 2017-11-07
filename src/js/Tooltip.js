import React from 'react';

import './../css/Tooltip.css';

class Tooltip extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      message: 'Show Tooltip',
      style: {
        height: '15px'
      }
    }
  }

  onChange(e){
    console.log(e)
  }

  handleShowHide(){
    let status = !this.state.show;
    let height = '10px';
    status && (height = '100px');
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
        <p>{msg}</p>
        </div>
        {this.state.show ?
          <div id="iconsAndImages" >
            <div id="right" className="tooltipOption">
              <img src="images/right.png" className='tooltipImage' alt="right"/>
              <p>Right Click: Regenerate</p>
            </div>
            <div id="tab" className="tooltipOption">
              <img src="images/tab.png" className='tooltipImage' alt="tab"/>
              <p>Tab: Add</p> 
            </div>
            <div id="esc" className="tooltipOption">
              <img src="images/esc.png" className='tooltipImage' alt="esc"/>
              <p>Esc: Cancel Selection</p> 
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