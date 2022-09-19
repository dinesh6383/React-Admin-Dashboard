import React from "react";
import StackedGraph from "./StackedGraph";
import "./Stacked.css";

const Stacked = () => {
  return (
    <div id="stacked-page">
      <div className="stacked-title">
        <h2>Stacked</h2>
      </div>
      <div className="stacked-table">
        <StackedGraph />
      </div>
    </div>
  );
};

export default Stacked;
