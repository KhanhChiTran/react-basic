import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { data } from "./../src/data/data";
// import Person from "./Person/Person";
import TodoItem from "./Components/Todos/TodoItem";
// import TrafficLight from "./Components/TrafficLight/trafficlight";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <TodoItem todoItems={this.todoItems} />
        {/* <TrafficLight /> */}
      </div>
    );
  }
}
export default App;
