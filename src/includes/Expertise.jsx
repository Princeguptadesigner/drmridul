import React from "react";
import ExpertiseImg1 from "../images/dr-mridul-chandra-das.jpg";


const Expertise = () => {
  return (
    <>
      <section className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Expertise</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                    <a href="blog-details.html">
                      <div className="expertise-inner">
                        <i className="icofont-doctor-alt"></i>
                        <h3>Paediatric and adolescent</h3>
                        <p>Paediatric and adolescent (0 – 18 year) gastrointestinal diseases</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                    <a href="blog-details.html">
                      <div className="expertise-inner">
                        <i className="icofont-stretcher"></i>
                        <h3>Paediatric and adolescent</h3>
                        <p>Paediatric and adolescent (0 – 18 year) liver diseases</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                    <a href="blog-details.html">
                      <div className="expertise-inner">
                        <i className="icofont-network"></i>
                        <h3>Teachnology</h3>
                        <p>Esophageal and Anorectal manometry</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                    <a href="blog-details.html">
                      <div className="expertise-inner">
                        <i className="icofont-ambulance-cross"></i>
                        <h3>Ambulance</h3>
                        <p>Esophageal PH-metry and Impedence study</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="expertise-right">
                  <img src={ExpertiseImg1} alt="Expertise" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;