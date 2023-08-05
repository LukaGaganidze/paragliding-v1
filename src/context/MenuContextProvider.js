"use client";

import React, { useState } from "react";

import { MenuContext } from "./MenuContext";

const MenuContextProvider = ({ children }) => {
  // MENU GENERAL STATE
  const [menuState, setMenuState] = useState(false);

  // MENU OPEN CLOSE FUNCTION
  const openMenu = () => setMenuState(true);
  const closeMenu = () => setMenuState(false);
  0;

  // SLIDE MENU

  //HOME MENU
  const [menuHome, setmenuHome] = useState(true);

  //BOOK MENU
  const [menuBook, setMenuBook] = useState(false);

  //INFO MENU
  const [menuInfo, setMenuInfo] = useState(false);

  //PILOT MENU
  const [menuPilot, setMenuPilot] = useState(false);

  //CONTACT MENU
  const [menuContact, setMenuContact] = useState(false);

  // MENU LINK STATE

  return (
    <MenuContext.Provider
      value={{
        menuState,
        openMenu,
        closeMenu,
        menuHome,
        menuBook,
        menuInfo,
        menuPilot,
        menuContact,
        setmenuHome,
        setMenuBook,
        setMenuInfo,
        setMenuPilot,
        setMenuContact,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
