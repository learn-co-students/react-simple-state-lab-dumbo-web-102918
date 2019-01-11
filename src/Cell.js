import React from "react";
class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
    this.handleColor = this.handleColor.bind(this);
  }
  handleColor() {
    const value = "#333";
    this.setState({
      color: value
    });
    // return this.state.color;
  }
  render() {
    // console.log(this.state.color);
    return (
      <div
        onClick={this.handleColor}
        className="cell"
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}
export default Cell;
