import React from "react";
import "./Line.css";
import LineGraph from "./LineGraph";

const Line = () => {
  return (
    <div id="line-page">
      <div className="line-title">
        <h2>Line</h2>
      </div>
      <div className="line-table">
        <LineGraph />
      </div>
    </div>
  );
};

export default Line;
