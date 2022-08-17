import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import SliderCard from "../db_content/SliderCard";
import SdataSlider from "../db_content/SdataSlider";

const Slider = () => {
  return (
    <>
      <OwlCarousel 
        items='1'
        loop
        className="home-slider owl-theme owl-carousel"
        nav
        dots
        navText={['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>']}
      >
        {SdataSlider.map((val, ind) => {
          return <SliderCard key={ind} imgurl={val.imgurl}  title={val.title} description={val.description} appointmentbtn={val.appointmentbtn} appointmentbtnurl={val.appointmentbtnurl} learnmorebtn={val.learnmorebtn} learnmorebtnurl={val.learnmorebtnurl} />;
        })}

      </OwlCarousel>
    </>
  );
};

export default Slider;