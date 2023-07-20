import React from "react";
import Badges from "./Badges";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col">
      <div className="mb-11">
        <Badges>Qualification</Badges>
        <motion.h2
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false }}
          className="header-2"
        >
          my education
        </motion.h2>
      </div>
      <div className="">
        <motion.div
          initial={{ y: 110 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex"
        >
          <div className="relative border-r">
            <p className="pt-3 text-base font-light w-24">2019-2020</p>
            <span className="absolute w-[5px] h-[5px] top-5 -right-[3px] rotate-45 bg-[var(--primary-color)]"></span>
          </div>

          <div className="pt-3 pl-5 pb-5">
            <p className="text-[var(--primary-color)] text-base font-normal uppercase mb-1">
            First Year (Master)
            </p>
            <h3 className="capitalize mb-3 text-xl font-medium">
            Computer Science
            </h3>
            <h4 className="mb-5 capitalize text-[var(--resume-text-color)] text-base font-medium">
            Yangon University
            </h4>
            {/* <p className=" paragraph-1 md:w-80">
              Major in UI Design, UX Design, Interaction Design, User Empathy,
              Branding.
            </p> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 120 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="flex"
        >
          <div className="relative border-r">
            <p className="pt-3 text-base font-light w-24">2018-2019</p>
            <span className="absolute w-[5px] h-[5px] top-5 -right-[3px] rotate-45 bg-[var(--primary-color)]"></span>
          </div>

          <div className=" pl-5 pb-5">
            <p className="text-[var(--primary-color)] text-base font-normal uppercase mb-1">
            Qualified
            </p>
            <h3 className="capitalize mb-3 text-xl font-medium">
            Computer Science
            </h3>
            <h4 className="mb-5 capitalize text-[var(--resume-text-color)] text-base font-medium">
            Dagon University
            </h4>
            {/* <p className=" paragraph-1 md:w-80">
              Major in UI Design, UX Design, Interaction Design, User Empathy,
              Branding.
            </p> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 130 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="flex"
        >
          <div className="relative border-r h-auto ">
            <p className="pb-0 text-base font-light w-24">2014-2018</p>
            <span className="absolute w-[5px] h-[5px] top-2 -right-[3px] rotate-45 bg-[var(--primary-color)]"></span>
          </div>
          <div className="pb-5 pl-5 ">
            <p className="text-[var(--primary-color)] text-base font-normal uppercase mb-1">
            BSc
            </p>
            <h3 className="capitalize mb-3 text-xl font-medium">
            Computer Science
            </h3>
            <h4 className="mb-5 capitalize text-[var(--resume-text-color)] text-base font-medium">
            Dagon University
            </h4>
            {/* <p className=" paragraph-1 my-0 md:w-96">
              Product Design, Information Architecture, Understanding the
              product, Product Analyses, Market Research, Communication.
            </p> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
