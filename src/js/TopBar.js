import React from 'react';
import TextEditor from './Editor';

import './../css/TopBar.css';

class TopBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      models: [{
        displayName: 'Hemingway',
        path: 'hemingway',
        active: true
      },{
        displayName: 'Bolaño',
        path: 'bolano',
        active: true
      },{
        displayName: 'Camus',
        path: 'camus',
        active: false
      },{
        displayName: 'Kafka',
        path: 'kafka',
        active: false
      }],
      currentModel: `./models/hemingway/`
    }
  }

  onChange(e){
    this.setState({
      currentModel: `./models/${e.model.path}/`
    })
  }

  render(){
    return(
      <div>
        <div id="topBar">   
          <div className="container">
          <ul>
          {this.state.models.map((model,i) => {
            let checked = <input type="radio" id={model.displayName} name="selector" onClick={()=>{this.onChange({model})}}/>;
            i === 0 && (checked = <input type="radio" id={model.displayName} name="selector" defaultChecked onClick={()=>{this.onChange({model})}}/>);
            return (
              <li key={model.displayName}>
                {checked}
                {model.active ? <label htmlFor={model.displayName}>{model.displayName}</label> : <label htmlFor='#'>{model.displayName}</label>}
                <div className="check"><div className="inside"></div></div>
              </li>
              )
          })}  
          </ul>
          </div>
        </div>
        <TextEditor model={this.state.currentModel}/>
      </div>
    )
  }
}

export default TopBar;

