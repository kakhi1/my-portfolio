import React from "react";
import Title from "../roundDesigns/home/Title";
import ProjectsCard from "./ProjectsCard";
import Ecommerce from "../../assets/E-commerce .jpg";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-10">
        <div className="px-6">
          <ProjectsCard
            title="E-commerce Angular"
            category="Responsive Website"
            image={Ecommerce}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
