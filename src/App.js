import React, { Component } from "react";
import Square from "./components/Square";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareData: ["", "", "", "", "", "", "", "", ""],
      player: true,
      count: 0
    };
  }

  handleClick = (id, value) => {
    this.setState(state => {
      return {
        squareData: state.squareData.map((s, i) => {
          if (i === id) {
            return value;
          }
          return s;
        })
      };
    });

    this.setState(togglePlayer);
  };
  handlePlayAgain = () => {
    this.setState({
      squareData: ["", "", "", "", "", "", "", "", ""],
      player: true,
      count: 0
    });
  };
  render() {
    const winner = checkWinner(this.state.squareData);
    return (
      <div style={board}>
        {this.state.squareData.map((s, i) => (
          <Square
            key={i}
            id={i}
            value={s}
            winner={winner}
            player={this.state.player}
            handleClick={this.handleClick}
          ></Square>
        ))}
        <p>
          {this.state.count !== 9 &&
            !winner &&
            (this.state.player ? "player X" : "player O")}
        </p>
        <p>{winner && "Winner"}</p>
        <p>
          {(this.state.count === 9 || winner) && (
            <button onClick={this.handlePlayAgain}>Play Again</button>
          )}
        </p>
      </div>
    );
  }
}
const matchNumbers = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const checkWinner = state => {
  const data = state;
  let a = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== "") {
      a.push(i);
    }
  }

  for (let j = 0; j < matchNumbers.length; j++) {
    let arr = matchNumbers[j].filter(s => a.indexOf(s) !== -1);
    if (
      arr.length === 3 &&
      data[arr[0]] === data[arr[1]] &&
      data[arr[1]] === data[arr[2]]
    ) {
      return true;
    }
  }
  return false;
};

const togglePlayer = state => {
  return { player: !state.player, count: state.count + 1 };
};
const board = {
  display: "grid",
  gridTemplateRows: "100px 100px 100px",
  gridTemplateColumns: "100px 100px 100px"
};
export default App;
