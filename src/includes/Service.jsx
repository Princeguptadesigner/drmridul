import React from "react";
import ServicesCard from "../db_content/ServicesCard";
import SdataServices from "../db_content/SdataServices";

const Service = () => {
  return (
    <>
      <section className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            {SdataServices.map((val, ind) => {
              return <ServicesCard key={ind} iconName={val.iconName}  title={val.title} description={val.description} learnmorebtn={val.learnmorebtn} learnmorebtnurl={val.learnmorebtnurl} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;