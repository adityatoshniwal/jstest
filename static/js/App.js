import React from 'react';
import ReactDOM from 'react-dom';
import SQLEditor from './SQLEditor';
import style from '../css/app.scss';

class App extends React.Component {
  render() {
    return(
      <SQLEditor title="Aditya Toshniwal"/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));