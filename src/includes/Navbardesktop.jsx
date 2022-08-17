import React from "react";
import { NavLink } from "react-router-dom";

const Navbardesktop = () => {
  return (
    <>
      <div className="main-nav menu-shrink">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <NavLink className="navbar-brand" to="/">
              <i className="icofont-doctor"></i> Dr. Mridul Chandra Das
            </NavLink>
            <div className="mean-push"></div>
            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent" style={{ display: 'none' }}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link active">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog" className="nav-link">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
};

export default Navbardesktop;