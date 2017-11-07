import React from 'react';

import './../css/Loading.css';

class Loading extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="loading">
        {this.props.isLoading && !this.props.isUserWritting ? <img id="loadingIcon" src="images/loading.gif"/>: null}
      </div>
    )
  }
}

export default Loading;
