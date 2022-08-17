import React from "react";
import Appointment from "./includes/Appointment";
import Blog from "./includes/Blog";
import Expertise from "./includes/Expertise";
import Intro from './includes/Intro';
import Service from "./includes/Service";
import Slider from "./includes/Slider";
import SliderBottomCall from "./includes/SliderBottomCall";
import VideoTabs from "./includes/VideoTabs";



import '../node_modules/magnific-popup/dist/magnific-popup.css';






const Home = () => {
  return (
    <>
      <Slider />
      <SliderBottomCall />
      <Intro />
      <Service />
      <Expertise />
      <VideoTabs />
      <Blog />
      <Appointment />
    </>
  );
}

export default Home;