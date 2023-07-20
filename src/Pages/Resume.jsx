import React from "react";
import Education from "../Components/Education";
import Experience from "../Components/Experience";

const Resume = () => {
  return (
    <div className="container px-5 md:px-12 2xl:px-48 mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-center lg:h-screen my-40 lg:my-0 ">
      <div className="w-full flex flex-col lg:flex-row justify-between items-stretch">
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
