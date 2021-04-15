import React, { Component } from "react";
import "./style.css";

class LuckyNumbers extends Component {
  state = {
    arrNumbers: [],
    spin: "",
    specialNumber: null,
  };
  showHandler = () => {
    this.setState({
      spin: false,
    });

    let newArr = [];
    let randomNum = () => Math.ceil(Math.random() * 49);
    while (newArr.length < 6) {
      let number = randomNum();
      if (!newArr.includes(number)) {
        newArr.push(number);
      }
    }

    this.setState({
      spin: `spin ${Math.random() / 100 + 1}s`,
      arrNumbers: [...newArr],
      specialNumber: Math.floor(Math.random() * 10),
    });
    setTimeout(() => {
      this.setState({ spin: "" });
    }, 1100);
  };
  resetHandler = () => {
    this.setState({
      arrNumbers: [],
    });
  };

  render() {
    return (
      <div>
        {this.state.arrNumbers.length > 0 && (
          <div className="wrap">
            {this.state.arrNumbers.map((num, i) => (
              <span
                style={{
                  animation: this.state.spin,
                }}
                key={i}
              >
                {num}
              </span>
            ))}
            <span
              style={{
                animation: this.state.spin,
              }}
              className="special-num"
            >
              {this.state.specialNumber}
            </span>
          </div>
        )}
        <div className="btn-wrap">
          <button onClick={this.resetHandler}>Reset</button>
          <button
            onClick={this.showHandler}
            disabled={this.state.spin.length !== 0}
          >
            Show me lucky numbers
          </button>
        </div>
      </div>
    );
  }
}

export default LuckyNumbers;
