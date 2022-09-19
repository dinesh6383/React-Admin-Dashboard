import React from "react";
import ColorBox from "./ColorBox";
import "./ColorPicker.css";

const ColorPicker = () => {
  return (
    <div id="color-page">
      <div className="color-title">
        <h2>Color Picker</h2>
      </div>
      <div className="color-table">
        <ColorBox />
      </div>
    </div>
  );
};

export default ColorPicker;
