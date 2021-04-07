import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { data } from "./../src/data/data";
// import Person from "./Person/Person";
// import TodoItem from "./Components/TodoItem";
import TrafficLight from "./Components/TrafficLight/trafficlight";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>Hi React</h1>
        {/* {this.todoItems.length > 0 &&
          this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}
        {this.todoItems.length === 0 && <p>Nothing to do...</p>} */}
        <TrafficLight />
      </div>
    );
  }
}

export default App;
