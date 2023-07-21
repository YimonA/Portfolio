import React from "react";
import Badges from "../Components/Badges";
import { BsArrowRightShort } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import Buttons from "../Components/Buttons";
import ReactTyped from "react-typed";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import me1 from "../images/about/me1.jpg";

const About = () => {
  const theme = useTheme();
  return (
    <div className="flex justify-center items-center h-screen w-full md:max-w-3xl lg:max-w-screen-2xl my-40 md:my-0 px-1 md:px-4 lg:px-10 mx-auto">
      <div className=" container h-full">
        <div className="h-full flex flex-col lg:flex-row pb-10 lg:pb-0">
          <div className=" basis-5/12 flex flex-col lg:justify-center w-full pl-0 lg:pl-12 md:py-20 ">
            <Badges>About me</Badges>
            <motion.h1
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
              className=" font-serif text-4xl  lg:text-6xl font-extrabold leading-relaxed "
            >
              Hi,
              <br />
              I'm{" "}
              <span className=" tracking-wider text-[#DF5646] ">
                <ReactTyped
                  strings={["Yi Mon Aye"]}
                  typeSpeed={250}
                  showCursor={false}
                  loop
                  loopCount={Infinity}
                />
              </span>
            </motion.h1>
            <motion.h3
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
              className=" tracking-wide  leading-relaxed text-2xl font-sans "
            >
              Frontend Web Developer
            </motion.h3>
            <motion.p
              initial={{ y: 120 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
              className=" tracking-wider my-3 text-[18px] paragraph-1 font-sans"
            >
              Hey are you looking for developer to build your
              <br />
              <b className="text-[#DF5646]">website and grow your business?</b>
              <br />
              let's shake hands with me.
            </motion.p>
            {/* <button
              type="button"
              className="text-white tracking-wider bg-[#DF5646] hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg  px-5 py-3 my-10 text-center inline-flex items-center capitalize "
            >
              Hire me
              <BsArrowRightShort className=" bg-inherit w-7 h-7 text-white ms-3"/>
            </button> */}
            <motion.div
              initial={{ y: 130 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
              className="py-3 mt-10"
            >
              <Buttons>
                {" "}
                <a href="#ContactMe" className="hover:text-white">
                  hire me
                </a>{" "}
                <BsArrowRightShort className=" right-arrow w-7 h-7 text-white ms-3" />
              </Buttons>
            </motion.div>

            <motion.div
              initial={{ y: 140 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
              className=" flex flex-row gap-3 items-end pt-10"
            >
              <button type="button" className=" text-base ">
                <a href="">

                <FaFacebookF className="w-5 h-5 my-2 mx-2 cursor-pointer  " />
                </a>
              </button>
              <button type="button" className=" text-base  ">
              <a href="">

                <FaLinkedinIn className="w-5 h-5 my-2 mx-2 cursor-pointer" />
                </a>
              </button>
              <button type="button" className=" text-base ">
                <a
                  href="https://github.com/YimonA?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5 my-2 mx-2 cursor-pointer" />
                </a>
              </button>
              <button type="button" className=" text-base ">
              <a href="">

                <FaTwitter className="w-5 h-5 my-2 mx-2 cursor-pointer" />
                </a>
              </button>
            </motion.div>
          </div>

          <div className="basis-7/12 flip-card relative w-full h-full px-2 mt-14 md:mt-0">
            <div
              className={`${
                theme.palette.mode === "light" ? "bg-[#f89a8f]" : "bg-[#32324C]"
              } hidden lg:block w-[42%] h-full absolute right-0`}
            ></div>
            <div className=" flip-card-inner pb-20 lg:pb-0">
              <img
                src={me1}
                className={`flip-card-back rounded-xl lg:rounded-full w-[450px] h-[450px] lg:absolute lg:top-[50%] lg:-translate-y-[50%] lg:right-2 xl:right-20 z-30 object-cover object-center ${
                  theme.palette.mode === "light"
                    ? "border-2 neonRed"
                    : "border-2 neonBlue"
                }`}
              ></img>
              <img
                src={me1}
                className={`hidden lg:block flip-card-back rounded-xl lg:rounded-full w-[450px] h-[450px] lg:absolute lg:top-[50%] lg:-translate-y-[50%] lg:right-2 xl:right-20 z-30 object-cover object-center${
                  theme.palette.mode === "light"
                    ? "p-2 neonRed"
                    : "p-2 neonBlue"
                }`}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
