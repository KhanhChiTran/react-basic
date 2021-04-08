import React, { Component } from "react";
class Validation extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    this.state = {
      value: "",
      length: 0,
      notice: "",
    };
    this.getTextInput = this.getTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      length: this.state.value.length,
      notice:
        this.state.value.length < 5 ? "Text too short" : "Text long enough",
    });
  };
  getTextInput = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          onChange={this.getTextInput}
          value={this.state.value}
        />
        <p>{this.state.length}</p>
        <p>{this.state.notice}</p>

        <button type='submit'>Submit</button>
      </form>
    );
  }
}
export default Validation;
