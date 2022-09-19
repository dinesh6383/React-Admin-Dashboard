import React from "react";
import "./Home.css";
import Sparkline from "./Sparkline";
import BudgetChart from "./BudgetChart";

const Revenue = ({ color }) => {
  return (
    <>
      <div className="rev-title">
        <p>Revenue Updates</p>
        <div className="exp-bud">
          <div style={{ color: "grey" }}>
            <div style={{ backgroundColor: "grey" }}></div>
            <p>Expense</p>
          </div>
          <div style={{ color: "green" }}>
            <div style={{ backgroundColor: "green" }}></div>
            <p>Budget</p>
          </div>
        </div>
      </div>
      <div className="rev-graph">
        <div className="rev-line">
          <div>
            <h2>$93,438</h2>
            <p>Budget</p>
          </div>
          <div>
            <h2>$48,487</h2>
            <p>Expense</p>
          </div>
          <div className="line-graph">
            <Sparkline />
          </div>
          <button style={{ backgroundColor: color }}>Download Report</button>
        </div>
        <div className="rev-bar">
          <BudgetChart />
        </div>
      </div>
    </>
  );
};

export default Revenue;
