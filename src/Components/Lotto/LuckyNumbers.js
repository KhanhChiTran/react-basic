import React, { Component } from "react";
import "./style.css";

class LuckyNumbers extends Component {
  state = {
    arrNumbers: [],
    specialNumber: null,
    clicked: false,
  };
  showHandler = () => {
    let newArr = [];
    let randomNum = () => Math.ceil(Math.random() * 49);
    while (newArr.length < 6) {
      let number = randomNum();
      if (!newArr.includes(number)) {
        newArr.push(number);
      }
    }
    this.setState({
      arrNumbers: [...newArr],
      specialNumber: Math.floor(Math.random() * 10),
      clicked: true,
    });
  };
  resetHandler = () => {
    this.setState({
      arrNumbers: [],
      clicked: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.arrNumbers.length > 0 && (
          <div className="wrap">
            {this.state.arrNumbers.map((num, i) => (
              <span key={i}>{num}</span>
            ))}
            <span className="special-num">{this.state.specialNumber}</span>
          </div>
        )}
        <div className="btn-wrap">
          <button onClick={this.resetHandler}>Reset</button>
          <button onClick={this.showHandler} disabled={this.state.clicked}>
            Show me lucky numbers
          </button>
        </div>
      </div>
    );
  }
}

export default LuckyNumbers;
