import React, { useContext } from "react";
import "./Header.css";
import { userProfileData } from "../../Data/Data";
import { flappy } from "../../Context/Context";
import { MdOutlineCancel } from "react-icons/md";

const UserProfile = () => {
  const { handleClick, color } = useContext(flappy);
  return (
    <div id="users-box">
      <div className="box-title">
        <p>UserProfile</p>
        <div onClick={() => handleClick("")}>
          <MdOutlineCancel style={{ cursor: "pointer", color: color }} />
        </div>
      </div>
      <div className="about-user">
        <div className="user-photo"></div>
        <div className="user-description">
          <h3>Dinesh R</h3>
          <p>
            Frontend Developer <br />
            <span>dineshravi6383@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="other-infos">
        <div className="a-infos">
          {userProfileData.map((data, index) => {
            return (
              <div className="indi-box" key={index}>
                <div
                  className="indi-icon"
                  style={{
                    color: `${data.iconColor}`,
                    backgroundColor: `${data.iconBg}`,
                  }}
                >
                  {data.icon}
                </div>
                <div className="indi-name">
                  <p>{data.title}</p>
                  <p>
                    <span>{data.desc}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
