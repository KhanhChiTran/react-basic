import React, { useState, useEffect } from "react";

const Avatar = ({ src, size, type }) => {
  const [radius, setRadius] = useState(0);
  const [dimension, setDimension] = useState(60);

  const getDimension = () => {
    let result;
    switch (size) {
      case "s":
        setDimension("30px");
        break;
      case "l":
        setDimension("120px");
        break;
      case "xl":
        setDimension("200px");
        break;

      default:
        setDimension("60px");

        break;
    }
    return result;
  };
  const getRadius = () => {
    let style;
    switch (type) {
      case "rounded":
        setRadius("6px");
        break;
      case "circle":
        setRadius("50%");
        break;

      default:
        setRadius("0");
        break;
    }
    return style;
  };

  useEffect(() => {
    getDimension();
    getRadius();
  }, []);

  return (
    <div>
      <img
        style={{ width: dimension, height: dimension, borderRadius: radius }}
        src={src}
      />
      <p>
        Size <b>{size}</b>{" "}
      </p>
      <p>
        Type <b>{type}</b>{" "}
      </p>
    </div>
  );
};
export default Avatar;
