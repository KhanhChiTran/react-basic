import React, { useState } from "react";

import Welcome from "./Components/Welcome/index";

import { Header } from "./Components/Header";
import "./App.css";

function App() {
  console.log("rerender APp component");
  return (
    <div className='App'>
      <Header />
      <Welcome name='Teddy' age={8} grade={2} />
    </div>
  );
}

export default App;
