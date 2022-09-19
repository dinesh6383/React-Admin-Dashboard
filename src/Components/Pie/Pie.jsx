import React from "react";
import "./Pie.css";
import PieChart from "./PieChart";

const Pie = () => {
  return (
    <div id="pie-page">
      <div className="pie-title">
        <h2>Pie Chart</h2>
      </div>
      <div className="pie-table">
        <PieChart />
      </div>
    </div>
  );
};

export default Pie;
