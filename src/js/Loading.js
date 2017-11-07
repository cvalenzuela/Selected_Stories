import React from 'react';

import './../css/Loading.css';

class Loading extends React.Component {
  render(){
    return(
      <div id="loading">
        {this.props.isLoading ? <img id="loadingIcon" src="images/loading.gif" alt="loading"/>: null}
      </div>
    )
  }
}

export default Loading;
