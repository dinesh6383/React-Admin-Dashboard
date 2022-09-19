import React, { useContext } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { links } from "../../Data/Data";
import { flappy } from "../../Context/Context";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

const Sidebar = () => {
  //These are the states comes from context API...
  const {
    activeMenu,
    setActiveMenu,
    color,
    windowDimension,
    toggleSidebar,
    setToggleSidebar,
  } = useContext(flappy);

  //handle close function sets the activemenu state.
  //It checks weather the dimension is less than 900
  //meanwhile it toggles back on menu clicking actions.
  const handleClose = (e) => {
    setActiveMenu(e.target.innerText);

    if (toggleSidebar && windowDimension <= 900) {
      setToggleSidebar(!toggleSidebar);
    }
  };

  return (
    <div id="side-bar">
      <div className="app-title">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <div className="symbol">
            <SiShopware /> <h1>Flappy</h1>
          </div>
        </Link>
        {windowDimension <= 900 && (
          <div
            className="cancel"
            onClick={() => {
              setToggleSidebar(false);
            }}
          >
            <MdOutlineCancel style={{ color: color }} />
          </div>
        )}
      </div>
      <div className="app-modules">
        {links.map((data, index) => {
          return (
            <div key={index}>
              <div className="module-heading">
                <p>{data.title}</p>
              </div>
              <div className="module-name">
                {data.links.map((data, index) => {
                  return (
                    <Link
                      to={`/${data.name}`}
                      key={index}
                      onClick={handleClose}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <span
                        style={{
                          backgroundColor: activeMenu === data.name && color,
                        }}
                      >
                        {data.icon}
                        <p>{data.name}</p>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
