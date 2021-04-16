import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import titleHeader from "./hello.module.css";
// import Todo from "./Components/Todos/TodoItem";
// import UserInput from "./Components/UserInput";
// import UserOutput from "./Components/UserOutput";
// import Clothes from "./Components/Clothes";
// import User from "./Components/Users";
// import Validation from "./Components/ValidationComponent/";
// import SearchUI from "./Components/searchUI";
import Quiz from "./Components/Quiz/quiz";

console.log((0 && 2) || (9 && 3));
function App() {
  // const [userName, setUserName] = useState("User");
  // const inputHandler = (inputName) => {
  //   setUserName(inputName);
  // };

  return (
    <div className="App">
      <header>
        <h1>Quiz App</h1>
      </header>
      {/* <Header />
      <Welcome name='Teddy' age={8} grade={2} />
      <Clothes name='Jacket' type='cotton' size='XL' color='Blue'>
        Item 1
      </Clothes>{" "} */}
      {/* <User /> */}
      {/* <UserInput click={inputHandler} /> */}
      {/* <UserOutput name={userName} /> */}
      {/* <Validation /> */}
      {/* <SearchUI /> */}
      {/* <Todo /> */}
      <Quiz />
      <h2 className={titleHeader.title}>This is module css</h2>
    </div>
  );
}
export default App;
