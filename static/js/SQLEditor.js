import React from 'react';
import Grid from './Grid';
import Toolbar from './Toolbar';
import TextInput from './TextInput';
import axios from 'axios';

class SQLEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'This is SQL editor',
      sql: '',
      message: 'Press execute to get output...',
      grid: {
        cols: [],
        rows: [],
      },
      executing: false,
    }
  }

  setMessage(message) {
    this.setState((prevState) => {
      return {
        ...prevState,
        message: message,
      }
    });
  }

  setGridData(cols, rows) {
    this.setState((prevState) => {
      return {
        ...prevState,
        grid: {
          cols: cols,
          rows: rows,
        },
      }
    });
  }

  showLoader(show){
    this.setState((prevState) => {
      return {
        ...prevState,
        executing: show
      }
    });
  }

  execute() {
    let self = this;

    this.showLoader(true);
    axios.post('query', {
      sql: this.state.sql,
    }).then((xhr)=>{
      let data = xhr.data;
      this.showLoader(false);
      if(data.result) {
        self.setGridData(data.result.fields, data.result.rows);
        this.setMessage(`Success`);
      } else {
        this.setMessage(`error - ${this.state.sql}`);
      }
    }).catch((err)=>{
      console.log(err);
      this.showLoader(false);
      self.setGridData([], []);
      this.setMessage(`executed error - ${this.state.sql}`);
    });
  }

  onSqlChange(sql) {
    this.setState((prevState) => {
      return {
        ...prevState,
        sql: sql,
      }
    });
  }

  render() {
    return (
      <div className="d-flex flex-column sqleditor">
        <Toolbar execute={this.execute.bind(this)}/>
        <TextInput sql={this.state.sql} onSqlChange={this.onSqlChange.bind(this)}/>
        <div className="flex-grow-1 grid-container">
          <Grid cols={this.state.grid.cols} rows={this.state.grid.rows} executing={this.state.executing}/>
        </div>
        <div className="message bg-dark text-light p-2">
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default SQLEditor;