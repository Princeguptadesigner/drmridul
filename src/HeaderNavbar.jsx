import React from "react";
import NavbarMobile from "./includes/NavbarMobile";
import Navbardesktop from "./includes/Navbardesktop";


const HeaderNavbar = () => {
  return (
    <>
      <div className="navbar-area sticky-top">
        <NavbarMobile />
        <Navbardesktop />
      </div>
    </>
  )
};

export default HeaderNavbar;