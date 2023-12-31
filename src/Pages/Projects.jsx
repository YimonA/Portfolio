import React from "react";
import PortfolioText from "../Components/PortfolioText";
import PortfolioCarousel from "../Components/PortfolioCarousel";

const Projects = () => {
  return (
    <div className="container px-5 md:px-12 2xl:px-48 mx-auto flex flex-col items-center justify-center lg:h-screen lg:pb-5">
      <div className="w-full">
        <PortfolioText />
      </div>
      <div className="w-full">
        <PortfolioCarousel />
      </div>
    </div>
  );
};

export default Projects;