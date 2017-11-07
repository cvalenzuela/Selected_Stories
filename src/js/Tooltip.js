import React from 'react';

import './../css/Tooltip.css';

class Tooltip extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      message: 'Show Tooltip'
    }
  }

  onChange(e){
    console.log(e)
  }

  handleShowHide(){
    let status = !this.state.show;
    this.setState({
      show: status
    })
  }

  render(){
    let msg = 'Show Tooltip';
    this.state.show && (msg = 'Hide Tooltip');
    return(
      <div id="Tooltip">
        <div id="showHide" onClick={()=>{this.handleShowHide()}}>
          <p>{msg}</p>
        </div>
        {this.state.show ?<div id="iconsAndImages">
          <div id="right" className="tooltipOption">
            <img src="images/right.png" className='tooltipImage'/>
            <p>Right Click: Regenerate</p>
          </div>
          <div id="tab" className="tooltipOption">
            <img src="images/tab.png" className='tooltipImage'/>
            <p>Tab: Add</p> 
          </div>
          <div id="esc" className="tooltipOption">
            <img src="images/esc.png" className='tooltipImage'/>
            <p>Esc: Cancel Selection</p> 
          </div>
        </div>: null}
      </div>
    )
  }
}

export default Tooltip;