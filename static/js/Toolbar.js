import React from 'react';

class Toolbar extends React.Component {
  render() {
    return(
      <div className="bg-dark p-2">
        <button className="btn btn-light" onClick={this.props.execute}>Execute</button>
      </div>
    );
  }
}

export default Toolbar;