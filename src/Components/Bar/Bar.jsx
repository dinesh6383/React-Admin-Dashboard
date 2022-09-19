import React from "react";
import BarGraph from "./BarGraph";
import "./Bar.css";

const Bar = () => {
  return (
    <div id="bar-page">
      <div className="bar-title">
        <h2>Bar</h2>
      </div>
      <div className="bar-table">
        <BarGraph />
      </div>
    </div>
  );
};

export default Bar;
