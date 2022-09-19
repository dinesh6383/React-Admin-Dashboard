import React from "react";
import "./Pyramid.css";
import PyramidGraph from "./PyramidGraph";

const Pyramid = () => {
  return (
    <div id="pyramid-page">
      <div className="pyramid-title">
        <h2>Pyramid</h2>
      </div>
      <div className="pyramid-table">
        <PyramidGraph />
      </div>
    </div>
  );
};

export default Pyramid;
