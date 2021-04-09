import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

// import UserInput from "./Components/UserInput";
// import UserOutput from "./Components/UserOutput";
// import Clothes from "./Components/Clothes";
// import User from "./Components/Users";
import Validation from "./Components/ValidationComponent/";

import SearchUI from "./searchUI";

function App() {
  // const [userName, setUserName] = useState("User");
  // const inputHandler = (inputName) => {
  //   setUserName(inputName);
  // };

  return (
    <div className='App'>
      {/* <Header />
      <Welcome name='Teddy' age={8} grade={2} />
      <Clothes name='Jacket' type='cotton' size='XL' color='Blue'>
        Item 1
      </Clothes>{" "} */}
      {/* <User /> */}
      {/* <UserInput click={inputHandler} /> */}
      {/* <UserOutput name={userName} /> */}
      {/* <Validation /> */}
      <SearchUI />
    </div>
  );
}
export default App;
