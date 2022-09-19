import React from "react";
import "./Area.css";
import AreaGraph from "./AreaGraph";

const Area = () => {
  return (
    <div id="area-page">
      <div className="area-title">
        <h2>Area</h2>
      </div>
      <div className="area-table">
        <AreaGraph />
      </div>
    </div>
  );
};

export default Area;
