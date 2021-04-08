import React, { Component } from "react";
import Validation from "./valid";

class ValidComponent extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       userInput: "",
  //     };
  //     this.x = this.handleInputChanged.bind(this);
  //   }
  //   handleInputChanged() {
  //     console.log(this);
  //   }
  state = {
    userInput: "",
  };

  handleInputChanged = (event) => {
    console.log("Handling user Input");
    this.setState({
      userInput: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.handleInputChanged(e)}
          type='text'
          value={this.state.userInput}
        />

        {/* <Validation /> */}
      </div>
    );
  }
}

export default ValidComponent;
