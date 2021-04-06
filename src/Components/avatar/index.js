import React from "react";
import picture from "./forest.jpeg";

const Avatar = ({
  data = { radius: 0, width: 60, height: 60, size: "m", type: "square" },
}) => {
  return (
    <div className='avatar'>
      <img
        src={picture}
        style={{
          borderRadius: data.radius,
          width: `${data.width}px`,
          height: `${data.height}px`,
        }}
        alt='hello'
      />
      <p>
        Size <b>{data.size}</b> with {data.width}x{data.height}
      </p>
      <p>
        Type <b>{data.type}</b>
      </p>
    </div>
  );
};

export default Avatar;
