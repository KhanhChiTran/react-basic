import React from "react";
const UserInput = (props) => {
  const style = {
    padding: "10px",
    marginBottom: "30px",
    outline: "none",
    border: "2px solid red",
    borderRadius: "6px",
  };
  return (
    <div>
      <input
        type='text'
        onChange={props.click}
        style={style}
        placeholder='Your Name'
      />
    </div>
  );
};
export default UserInput;
