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

  return (
    <MenuContext.Provider
      value={{
        // menu global open/close state
        menuState,

        // open close funciton for global state
        openMenu,
        closeMenu,

        // black menu page indicator state
        menuHome,
        menuBook,
        menuInfo,
        menuPilot,
        menuContact,

        // black menu page indicator state setters
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
