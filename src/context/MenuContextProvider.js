"use client";

import React, { useState } from "react";

import { MenuContext } from "./MenuContext";

const MenuContextProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(false);

  const openMenu = () => setMenuState(true);
  const closeMenu = () => setMenuState(false);

  return (
    <MenuContext.Provider
      value={{
        menuState,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
