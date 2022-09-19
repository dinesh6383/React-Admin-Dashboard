import React from "react";
import "./ColorMapping.css";
import ColorMapGraph from "./ColorMapGraph";

const ColorMapping = () => {
  return (
    <div id="colormap-page">
      <div className="colormap-title">
        <h2>Color Mapping</h2>
      </div>
      <div className="colormap-table">
        <ColorMapGraph />
      </div>
    </div>
  );
};

export default ColorMapping;
