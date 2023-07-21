import React from "react";
import Badges from "./Badges";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex flex-col">
      <div className="mb-11">
        <Badges>Experience</Badges>
        <motion.h2
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="header-2"
        >
          my experience
        </motion.h2>
      </div>
      <div className="">
        <motion.div
          initial={{ y: 110 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex"
        >
          <div className="relative border-r">
            <p className="pt-3 text-base font-light w-24 ">2023</p>
            <span className="absolute w-[5px] h-[5px] top-5 -right-[3px] rotate-45 bg-[var(--primary-color)]"></span>
          </div>

          <div className="pt-3 pl-5 pb-5">
            <p className="text-[var(--primary-color)] text-base font-normal capitalize mb-1">
            MMS ONE STOP IT SOLUTIONS
            </p>
            <h3 className="capitalize mb-3 text-xl font-medium">
            as a team member in workshop
            </h3>
            <p className=" paragraph-1 md:w-96">
              In 2023 June, I joined the workshop for frontend development on <a href="https://mms-it.com/" target="_blank" className=" text-[var(--primary-color)]">MMS ONE STOP IT SOLUTIONS.</a> On the workshop, I got many experience about how to collaborate with team members, how to use git & github, framework and library effectively, and many useful knowledge about the frontend development. 
            </p>
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ y: 130 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          viewport={{ once: false }}
          className="flex"
        >
          <div className="relative border-r h-auto lg:h-[186px]">
            <p className="pb-0 text-base font-light w-10 md:w-24">2014-2016</p>
            <span className="absolute w-[5px] h-[5px] top-2 -right-[3px] rotate-45 bg-[var(--primary-color)]"></span>
          </div>
          <div className="pb-0 pl-5">
            <p className="text-[var(--dribble-color)] text-base font-normal capitalize mb-1">
              dribble
            </p>
            <h3 className="capitalize mb-3 text-xl font-medium">
              product designer
            </h3>
            <p className=" paragraph-1 my-0 md:w-96">
              After working well for two years at{" "}
              <a
                href="https://dribbble.com/"
                target="_blank"
                className="text-[var(--dribble-color)]"
              >
                {" "}
                dribble{" "}
              </a>
              , I got the opportunity to work in one of the best market dribbles
              in the world, and there I am now working as a podcast designer.
            </p>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Experience;
