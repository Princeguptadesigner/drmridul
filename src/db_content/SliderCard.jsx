import React from "react";
import { NavLink } from "react-router-dom";


const SliderCard = (props) => {
  return (
    <>
      <div className="slider-item slider-item-img">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="slider-text">
                <div className="slider-shape">
                  <img src={props.imgurl} alt="" />
                </div>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="common-btn">
                  <NavLink to={props.appointmentbtnurl}>{props.appointmentbtn}</NavLink>
                  <NavLink className="cmn-btn-right" to={props.learnmorebtnurl}>{props.learnmorebtn}</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;