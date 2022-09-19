import React from "react";
import BudgetChart from "../Home/BudgetChart";

const StackedGraph = () => {
  return (
    <div
      className="stacked-tab-holder"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
    >
      <BudgetChart width="100%" height="100%" />
    </div>
  );
};

export default StackedGraph;
