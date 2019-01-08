import React, { Component } from 'react';
import Cell from "./Cell"

export default class Matrix extends Component {


  genRow = (vals) => (
    vals.map((val,ind) => <Cell key={ind} value={val} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map((rowVals,ind) => <div key={ind} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: [
    ["#f00", "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",],
    ["#f00", "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",],
    ["#f00", "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",],
    ["#f00", "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",],
    ["#f00", "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",],
    ["#f00", "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",],
    ["#f00", "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",],
    ["#f00", "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",],
    ["#f00", "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",],
    ["#f00", "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",]
  ]
}
