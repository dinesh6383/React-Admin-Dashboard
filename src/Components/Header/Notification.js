import React, { useContext } from "react";
import "./Header.css";
import { chatData } from "../../Data/Data";
import { flappy } from "../../Context/Context";
import { MdOutlineCancel } from "react-icons/md";

const Notification = () => {
  const { handleClick, color } = useContext(flappy);
  return (
    <div id="notif-box">
      <div className="box-title">
        <p>Notifications</p>
        <div onClick={() => handleClick("")}>
          <MdOutlineCancel style={{ cursor: "pointer", color: color }} />
        </div>
      </div>
      <div className="noti-holder">
        <div className="noti-box">
          {chatData.map((data) => {
            return (
              <div className="indi-noti">
                <div
                  className="msg-user-img"
                  style={{ backgroundImage: `url(${data.image})` }}
                ></div>
                <div className="msg-user">
                  <p>{data.message}</p>
                  <p>
                    <span>{data.desc}</span>
                  </p>
                </div>
              </div>
            );
          })}
          <button style={{ backgroundColor: color }}>
            See all notfications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
