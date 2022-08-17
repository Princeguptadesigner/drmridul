import React from "react";
import { NavLink } from "react-router-dom";


const ServicesCard = (props) => {
  return (
    <>
      <div className="col-sm-6 col-lg-3 wow fadeInUp" data-wow-delay=".3s">
        <div className="service-item">
          <div className="service-front">
            <i className={props.iconName}></i>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <div className="service-end">
            <i className={props.iconName}></i>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <NavLink to={props.learnmorebtnurl}>{props.learnmorebtn}</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;