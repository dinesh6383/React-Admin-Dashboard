import React from "react";
import FinancialGraph from "./FinancialGraph";
import "./Financial.css";

const Financial = () => {
  return (
    <div id="financial-page">
      <div className="financial-title">
        <h2>Financial</h2>
      </div>
      <div className="financial-table">
        <FinancialGraph />
      </div>
    </div>
  );
};

export default Financial;
