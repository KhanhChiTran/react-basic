import React, { useState } from "react";
const UserInput = (props) => {
  const [name, setName] = useState("");
  const [state, setState] = useState(false);
  const style = {
    padding: "40px",
    marginBottom: "30px",
    outline: "none",
    border: "2px solid red",
    borderRadius: "6px",
    fontSize: "20px",
  };
  const btnStyle = {
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    margin: "5px",
    borderRadius: "3px",
  };

  const hideHandler = () => {
    setState(!state);
  };
  return (
    <div>
      <input
        type="text"
        onChange={props.click}
        style={style}
        placeholder="Your Name"
      />
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          props.click(name);
        }}
      >
        {state ? (
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            style={style}
            placeholder="Your Text"
          />
        ) : (
          ""
        )}
        <button style={btnStyle} onClick={hideHandler}>
          {!state ? "Show" : "Hide"}
        </button>
      </form>
    </div>
  );
};
export default UserInput;
