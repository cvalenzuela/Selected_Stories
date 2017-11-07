import React from 'react';

import './../css/TopBar.css';

class TopBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      models: ['Hemingway', 'Bolaño', 'Bradbury']
    }
  }

  onChange(e){
    
  }

  render(){
    return(
      <div id="topBar">   
        <div className="container">
        <ul>
        {this.state.models.map((model,i) => {
          let checked = <input type="radio" id={model} name="selector" onClick={()=>{this.onChange({model})}}/>;
          i === 0 && (checked = <input type="radio" id={model} name="selector" defaultChecked onClick={()=>{this.onChange({model})}}/>);
          return (
            <li key={model}>
              {checked}
              <label htmlFor={model}>{model}</label>
              <div className="check"><div className="inside"></div></div>
            </li>
            )
        })}  
        </ul>
        </div>
      </div>
    )
  }
}

export default TopBar;

