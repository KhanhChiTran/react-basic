import React from "react";

const person = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        My name is {props.name} and I {props.age} years old..
        {!!props.gender && <span>I am a {props.gender}</span>}
      </p>
      {props.children}
    </div>
  );
};

export default person;
