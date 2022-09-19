import React, { useContext } from "react";
import "./Home.css";
import Revenue from "./Revenue";
import { earningData } from "../../Data/Data";
import { flappy } from "../../Context/Context";
import { BiDollar } from "react-icons/bi";

const Home = () => {
  const { color } = useContext(flappy);
  return (
    <div id="home-page">
      <div className="welcome-box">
        <div className="welcome-desc">
          <div className="earn-title">
            <div>
              <p>Earnings</p>
              <span>
                <p>$63,566.90</p>
              </span>
            </div>
            <div className="dollar" style={{ backgroundColor: color }}>
              <BiDollar />
            </div>
          </div>
          <div className="earn-amt">
            <button style={{ backgroundColor: color }}>Download</button>
          </div>
        </div>
        <div className="welcome-img"></div>
      </div>
      <div className="initial-infos">
        {earningData.map((data, index) => {
          return (
            <div className="infos" key={index}>
              <div className="icon-holder">
                <div
                  style={{
                    backgroundColor: `${data.iconBg}`,
                    color: `${data.iconColor}`,
                  }}
                >
                  {data.icon}
                </div>
              </div>
              <div className="amount-holder">
                <p>
                  {data.amount}
                  <span style={{ color: `${data.pcColor}` }}>
                    {data.percentage}
                  </span>
                </p>
                <p>{data.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="revenue-section">
        <Revenue color={color} />
      </div>
    </div>
  );
};

export default Home;
