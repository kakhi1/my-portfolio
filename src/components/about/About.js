import React from "react";
import Title from "../roundDesigns/home/Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="about" subTitle="Me " />
      <AboutMe />
      <Title title="My" subTitle="Services " />
      <MyServices />
    </section>
  );
};

export default About;
