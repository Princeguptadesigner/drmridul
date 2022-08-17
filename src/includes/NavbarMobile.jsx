import React from "react";
import { NavLink } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <>
      <div className="mobile-nav mean-container">
        <div className="mean-bar"><a href="#nav" className="meanmenu-reveal" style={{ right: '0%', left: 'auto'}}><span><span><span></span></span></span></a>
          <nav className="mean-nav">
            <ul className="navbar-nav" style={{ display: 'none' }}>
              <li className="nav-item">
                <NavLink to="/drmridul/" className="nav-link active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/drmridul/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/drmridul/services" className="nav-link">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/drmridul/blog" className="nav-link">Blog</NavLink>
              </li>
              <li className="nav-item mean-last">
                <NavLink to="/drmridul/contact" className="nav-link">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <NavLink to="/drmridul/" className="logo">
          <i className="icofont-doctor"></i> Dr. Mridul Chandra Das
        </NavLink>
      </div>
    </>
  )
};

export default NavbarMobile;