import React from "react";
const Clothes = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
      <ul>
        <li>
          <b>Name: </b> {props.name}
        </li>
        <li>
          <b>Catergory: </b> {props.type}
        </li>
        <li>
          <b>Color: </b> {props.color}
        </li>
        <li>
          <b>Size: </b> {props.size}
        </li>
      </ul>
    </div>
  );
};

export default Clothes;
