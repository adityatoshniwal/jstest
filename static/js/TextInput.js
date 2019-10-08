import React from 'react';

export default class TextInput extends React.Component {
  onChange(e){
    this.props.onSqlChange(e.target.value);
  }

  render() {
    return(
      <div className="textinput">
        <textarea defaultValue={this.props.sql} onChange={this.onChange.bind(this)}></textarea>
      </div>
    );
  }
}