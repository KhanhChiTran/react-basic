import React, { useState } from "react";
import "./welcome.css";

import { Header } from "../Header";

function Welcome(props) {
  // This is props
  const { name, age, grade } = props;
  //This is state :

  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log(number);
  const increment = () => {
    setNumber(number + 4);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  console.log("Welcome Component is rendering ....");
  const Turnon = () => (
    <div>
      <h1>This is Turn On</h1>
    </div>
  );
  const TurnOff = () => (
    <div>
      <h1>This is Turn Off</h1>
    </div>
  );
  return (
    <div className='welcome'>
      <h1>Hello World</h1>
      {/* <p>I am {name}</p> */}

      <p>The current number is {number} </p>
      <button className='btn-welcome' onClick={increment}>
        {" "}
        Increment{" "}
      </button>
      <button className='btn-welcome' onClick={decrement}>
        Decrement
      </button>
      <button onClick={() => setToggle(!toggle)}>Turn on</button>
      {/* Conditional Rendering */}
      {/* {toggle && <h1> Turn on </h1>} */}
      {toggle ? <Turnon /> : <TurnOff />}

      <p></p>
    </div>
  );
}

export default Welcome;
