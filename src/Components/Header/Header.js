import React, { useContext, useEffect } from "react";
import "./Header.css";
import { flappy } from "../../Context/Context";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCart } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import UserProfile from "./UserProfile";
import Notification from "./Notification";
import Chat from "./Chat";
import Cart from "./Cart";

const Header = () => {
  //These are the states comes from context API...
  const {
    color,
    toggleSidebar,
    setToggleSidebar,
    windowDimension,
    setDimension,
    isClicked,
    handleClick,
  } = useContext(flappy);

  /***************************************************** */
  //This is the main concept for toggling the side bar according
  //to the viewport of the user. Here i am using useeffect to get the
  //window size on opening of the application. Using another use effect\
  //whenever the viewport state changes it alter sidebar accordingly.

  useEffect(() => {
    function handleResize() {
      setDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowDimension <= 900) {
      setToggleSidebar(false);
    } else {
      setToggleSidebar(true);
    }
  }, [windowDimension]);

  /***************************************************** */

  return (
    <>
      <div id="header">
        <div
          className="nav-icon"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          <GiHamburgerMenu style={{ color: color }} />
        </div>
        <div className="intimation-icons">
          <div className="cart-icon" onClick={() => handleClick("cart")}>
            <BiCart style={{ color: color }} />
          </div>
          <div className="chat-icon" onClick={() => handleClick("chat")}>
            <FiMessageSquare style={{ color: color }} />
          </div>
          <div
            className="notif-icon"
            onClick={() => handleClick("notification")}
          >
            <IoMdNotificationsOutline style={{ color: color }} />
          </div>
          <div
            className="user-profile"
            onClick={() => handleClick("userProfile")}
          >
            <div className="user-image"></div>
            <p>
              Hi, <span>Dinesh</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
        {isClicked.chat && <Chat />}
        {isClicked.cart && <Cart />}
      </div>
    </>
  );
};

export default Header;
