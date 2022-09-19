import React from "react";
import "./Calender.css";
import CalenderBox from "./CalenderBox";

const Calender = () => {
  return (
    <div id="calender-page">
      <div className="order-title">
        <h2>Calender</h2>
      </div>
      <div className="calender-table">
        <CalenderBox />
      </div>
    </div>
  );
};

export default Calender;
