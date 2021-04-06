import React, { useState } from "react";

import Welcome from "./Components/Welcome/index";

import { Header } from "./Components/Header";
import "./App.css";

import Clothes from "./Components/Clothes";
import User from "./Components/Users";

function App() {
  console.log("rerender APp component");
  return (
    <div className='App'>
      {/* <Header />
      <Welcome name='Teddy' age={8} grade={2} />
      <Clothes name='Jacket' type='cotton' size='XL' color='Blue'>
        Item 1
      </Clothes>{" "} */}
      <User />
    </div>
  );
}

export default App;
