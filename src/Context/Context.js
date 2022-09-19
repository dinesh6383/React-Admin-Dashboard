import React, { createContext, useState } from "react";

export const flappy = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const Context = ({ children }) => {
  //Context API is a powerful functionality for mid ranged projects..
  //The states created here can be able able to access thoughout the app.
  const [activeMenu, setActiveMenu] = useState("ecommerce");
  const [color, setColor] = useState("#03C9D7");
  const [windowDimension, setDimension] = useState(undefined);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (option) => {
    setIsClicked({ ...initialState, [option]: true });
  };

  return (
    <flappy.Provider
      value={{
        activeMenu,
        setActiveMenu,
        color,
        setColor,
        windowDimension,
        setDimension,
        toggleSidebar,
        setToggleSidebar,
        isClicked,
        setIsClicked,
        handleClick,
      }}
    >
      {children}
    </flappy.Provider>
  );
};

export default Context;
