import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

//function Child({ onChangeColor }) {
function Child({ onChangeColor, color}) {
  // console.log(onChangeColor);
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color}}
    />
  );
  console.log(onChangeColor);
return (
  <div
    onClick={onChangeColor}
    className="child"
    style={{ backgroundColor: color}}
  />
);
  return <div className="child" style={{ backgroundColor: "#FFF" }} />;
}

export default Child;