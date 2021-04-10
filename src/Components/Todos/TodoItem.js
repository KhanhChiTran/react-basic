import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.changedHandler = this.changedHandler.bind(this);
    this.todoItemDone = this.todoItemDone.bind(this);
    this.state = {
      active: false,
      todoItems: [],
      todoDoneItems: [],
      value: "",
    };
  }
  todoItemDone(x) {
    console.log(x);
    this.setState({
      todoDoneItems: [...this.state.todoDoneItems, x],
    });
  }
  changedHandler(e) {
    this.setState({
      value: e.target.value,
    });
  }
  removeItem = (x) => {
    this.setState({
      todoItems: this.state.todoItems.filter((todo) => todo !== x),
      todoDoneItems: this.state.todoDoneItems.filter((todo) => todo !== x),
    });
  };
  submitTodo = () => {
    this.setState({
      todoItems: [...this.state.todoItems, this.state.value],
      value: "",
    });
  };

  render() {
    return (
      <div className="TodoItem">
        <input
          type="text"
          value={this.state.value}
          onChange={(event) => this.changedHandler(event)}
        />
        <button type="submit" onClick={this.submitTodo}>
          Submit
        </button>
        <div>
          {this.state.todoItems.map((todo, index) => (
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              key={index}
            >
              <p
                style={{ flex: "1" }}
                className={`${
                  this.state.todoDoneItems.includes(todo) ? "active" : null
                }`}
              >
                {" "}
                {todo}{" "}
              </p>
              <span onClick={() => this.todoItemDone(todo)}>Done</span>
              <span onClick={() => this.removeItem(todo)}>Delete</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default TodoItem;

function helloWorld(parameter) {
  // do something...
}
