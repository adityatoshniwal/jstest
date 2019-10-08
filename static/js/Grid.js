import React from 'react';

class Grid extends React.Component {

  getRow(row, rownum) {
    return (
      row.map((cell, i)=>{
        return(<td key={i + '' +rownum}>{cell}</td>)
      })
    );
  }

  render() {
    if(this.props.executing) {
      return(
        <div className="ml-auto">Fetching....</div>
      )
    } else {
      return(
        <table className="grid">
          <thead>
            <tr>
              <td key="cell-num-head" className="cell-num-head"></td>
              {
                this.props.cols.map((col)=>{
                  return(
                    <td key={col.columnID}>{col.name}</td>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
              {
                this.props.rows.map((row, i)=>{
                  return(
                    <tr key={i}>
                      <td key={i} className="cell-num">{i}</td>
                      { this.getRow(row, i) }
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
      );
    }
  }
}

export default Grid;