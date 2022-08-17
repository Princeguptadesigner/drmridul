import React from "react";
import IntroImg1 from "../images/dr-mridul-chandra-das.jpg";
import IntroImg2 from "../images/intro-bg.png";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src={IntroImg1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src={IntroImg2} alt="" />
                <h2>About Dr. Mridul Chandra Das</h2>
                <p>Dr Mridul Chandra Das after completing MBBS from Nil Ratan Sircar Medical College, Calcutta, did MD – (Paediatrics) from the Prestigious Institute “Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh''. Then he worked as senior resident (Paediatrics) in PGIMER and Lady Hardinge Medical College, New Delhi for 2 years, and experienced further in the Paediatrics. During his Pediatric training, he realized that in India, Children with gastrointestinal and liver diseases are under explored and not being properly evaluated because of less awareness regarding Pediatric gastroenterology subject among the Pediatricians and parents in our country.</p>
                <ul>
                  <li><i className="icofont-check-circled"></i>
                    MBBS – Nilratan Sircar Medical College and Hospital, Calcutta
                  </li>
                  <li><i className="icofont-check-circled"></i>
                    MD (Paediatrics) – Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh.
                  </li>
                  <li><i className="icofont-check-circled"></i>
                    DNB (Paediatrics)
                  </li>
                  <li><i className="icofont-check-circled"></i>
                    DM (Pediatric Gastroenterology), PDCC (Pediatric gastroenterology) – Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGMS), Lucknow
                  </li>
                </ul>
                <NavLink to="/about">Know More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;