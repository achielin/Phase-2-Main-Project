import React from "react";
import Image from "./istockphoto.jpg";
import Same from "./Same";
import './About.css'

const About = () => {
  return (
    <>
      <Same
        title="About Us"
        text="FinIT Solution is a Kenyan Full Service ISP company, specializing in Wireless and Fiber Internet access and private networking solutions,web development and E-strategy. We are proud to have been recognized and awarded by the computer society of Kenya as the Fastest growing and Most innovative ISP of the year . " 
        imgsrc={Image}
        btn="Know More"
      />
    </>
  );
};

export default About;