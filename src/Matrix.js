import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

const defaultColor=()=>{
  let [color, cells]= ['#F00', []]

  for(let i=0; i<10; i++ ){
    let innerCell=[]
    for(let i=0; i<10; i++){
      innerCell.push(color)
    }
    cells.push(innerCell)
  }
  // console.log(cells);
  return cells;
}
Matrix.defaultProps={
  values: defaultColor()
  // values:[['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']]
}
