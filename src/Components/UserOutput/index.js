import React from "react";
const UserOutput = (props) => {
  const style = {
    fontSize: "20px",
    color: "blue",
  };
  return (
    <div>
      <p style={style}>Welcome {props.name} </p>
    </div>
  );
};
export default UserOutput;
