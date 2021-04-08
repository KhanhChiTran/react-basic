import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
    this.state = {
      active: false,
    };
  }
  onItemClick(e) {
    // this.setState(this.onItemClick());
    console.log("Hello ");
    this.setState({ active: !this.state.active });
  }
  render() {
    const { item, hello } = this.props;
    return (
      <div
        onClick={this.onItemClick}
        className={`TodoItem ${this.state.active ? "active" : null}`}
      >
        <p>{item} </p>
      </div>
    );
  }
}
export default TodoItem;
