import React, { useContext } from "react";
import "./Header.css";
import { chatData } from "../../Data/Data";
import { flappy } from "../../Context/Context";
import { MdOutlineCancel } from "react-icons/md";

const Chat = () => {
  const { handleClick, color } = useContext(flappy);

  return (
    <div id="chat-box">
      <div className="box-title">
        <p>Messages</p>
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
                  <span>{data.time}</span>
                </div>
              </div>
            );
          })}
          <button style={{ backgroundColor: color }}>See all messages</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
