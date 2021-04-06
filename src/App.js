import React, { useState } from "react";

// import Welcome from "./Components/Welcome";

// import { Header } from "./Components/Header";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";
// import Clothes from "./Components/Clothes";
// import User from "./Components/Users";

function App() {
  const [userName, setUserName] = useState("User");
  const inputHandler = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className='App'>
      {/* <Header />
      <Welcome name='Teddy' age={8} grade={2} />
      <Clothes name='Jacket' type='cotton' size='XL' color='Blue'>
        Item 1
      </Clothes>{" "} */}
      {/* <User /> */}
      <UserInput click={inputHandler} />
      <UserOutput name={userName} />
    </div>
  );
}

export default App;
