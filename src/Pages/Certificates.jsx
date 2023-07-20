import React from "react";
import Badges from "../Components/Badges";
import { BsArrowRightShort } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import Buttons from "../Components/Buttons";
import ReactTyped from "react-typed";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import AboutDark from "../images/about/about-dark.png";
import AboutLight from "../images/about/about-light.png";
import ShapeOneDark from "../images/about/shape-one-dark.png";
import ShapeTwoDark from "../images/about/shape-two-dark.png";
import CertificatesDetail from "../Components/CertificatesDetail";

const Certificates = () => {
  const theme = useTheme();
  return (
    <div className="flex justify-center items-center lg:h-screen w-full md:max-w-3xl lg:max-w-screen-2xl my-40 md:my-0 px-1 md:px-4 lg:px-10 mx-auto">
      <div className=" container h-full ">
        <div className="h-full flex flex-col lg:flex-row lg:justify-center lg:items-center">
          <div className=" basis-5/12 w-full pl-0 lg:pl-12 ">
            <CertificatesDetail />
          </div>
          <div className=" basis-7/12 ">
            <div className="relative pt-20 pl-0 lg:pl-14">
              <div className=" ">
                <img
                  src={`${
                    theme.palette.mode === "dark"
                      ? `${AboutDark}`
                      : `${AboutLight}`
                  }`}
                  className="w-[100%] h-[545px] object-contain object-center"
                  alt="about"
                />
              </div>
              <motion.div
                initial={{ y: 80 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false }}
                className="absolute w-10 lg:w-16 h-4 left-16 top-44 md:left-40 md:top-20 lg:left-56 "
              >
                <img src={ShapeOneDark} alt="sharp-one-dark" />
              </motion.div>
              <motion.div
                initial={{ y: 80 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false }}
                className="absolute top-40 right-20 md:top-14 md:right-44 2xl:right-64 2xl:top-16"
              >
                <img src={ShapeTwoDark} alt="sharp-two-dark" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
