import React, { Component } from "react";
import PropTypes from "prop-types";

class Square extends Component {
  handleClick = id => {
    const v = this.props.player ? "X" : "O";
    if (this.props.value === "" && this.props.winner === false) {
      return this.props.handleClick(id, v);
    }
  };

  render() {
    const { id, value } = this.props;
    return (
      <div style={square}>
        <div style={s} onClick={this.handleClick.bind(this, id)}>
          <p style={{ fontSize: "20px" }}>{value}</p>
        </div>
      </div>
    );
  }
}

const square = {
  border: "1px solid black"
};
const s = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
Square.propTypes = {
  handleClick: PropTypes.func.isRequired,
  player: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  winner: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};
export default Square;
