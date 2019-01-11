import React, { Component } from "react";
import Cell from "./Cell";

export default class Matrix extends Component {
  state = {
    vals: this.props.values
  };

  genRow = vals => vals.map((val, i) => <Cell key={i} value={val} />); // replace me and render a cell component instead!

  genMatrix = () =>
    this.props.values.map((rowVals, i) => (
      <div key={i} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}
