import React, { Component } from "react";
import "./style.css";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED,
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;

      default:
        return RED;
    }
  }

  render() {
    return (
      <div className="TrafficLight">
        <div
          className={`bulb red ${
            this.state.currentColor === RED ? "active" : null
          }`}
        ></div>
        <div
          className={`bulb orange ${
            this.state.currentColor === ORANGE ? "active" : null
          }`}
        ></div>
        <div
          className={`bulb green ${
            this.state.currentColor === GREEN ? "active" : null
          }`}
        ></div>
      </div>
    );
  }
}

export default TrafficLight;
