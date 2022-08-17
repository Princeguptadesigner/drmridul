import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-10 col-lg-10">
              <div className="header-top-item">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <NavLink to="tel:+07554332322">
                        <i className="icofont-ui-call"></i> Call : +91 88744 47836
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="mailto:mriduldas83@gmail.com">
                        <i className="icofont-ui-message"></i> mriduldas83@gmail.com
                      </NavLink>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i> Narayana Super Speciality Hospital, Gurugram, Haryana
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-lg-2">
              <div className="header-top-item">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <NavLink to="#">
                        <i className="icofont-facebook"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="icofont-twitter"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="icofont-pinterest"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTop;