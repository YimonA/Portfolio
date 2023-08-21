import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import RealEstateLight from "../images/RealEstate-Light.png";
import RealEstateDashboard from "../images/RealEstate-Dashboard.png";
import ContactApp from "../images/ContactApp.png";

const PortfolioCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    dotsClass: `slick-dots`,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <motion.div
      initial={{ y: 60 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.2, delay: 0.6 }}
      viewport={{ once: false }}
      className=""
    >
      <Slider {...settings}>
      {/* <div className="carousel-image  px-5 ">
          <div
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(${RealEstateLight})`,
            }}
          >
            <a href="https://github.com/YimonA/Real-Estate" target="_blank">
              <button className=" theme-btn-link mr-2 md:mr-4 hover:bg-[#e77063]">
                <FiGithub className="w-full h-full" color="white" />
              </button>
            </a>
            <a href="https://real-estate-teamf.vercel.app/" target="_blank">
              <button className="theme-btn">view demo</button>
            </a>
          </div>
        </div> */}
        <div className="carousel-image  px-5">
          <div
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(${ContactApp})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="https://github.com/YimonA/Contact-App" target="_blank">
              <button className=" theme-btn-link mr-2 md:mr-4 hover:bg-[#e77063]">
                <FiGithub className="w-full h-full" color="white" />
              </button>
            </a>
            <a
              href="https://contact-app-yimona.vercel.app/login"
              target="_blank"
            >
              <button className="theme-btn">view demo</button>
            </a>
          </div>
        </div>
        <div className="carousel-image  px-5 ">
          <div
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(${RealEstateLight})`,
            }}
          >
            <a href="https://github.com/YimonA/Real-Estate" target="_blank">
              <button className=" theme-btn-link mr-2 md:mr-4 hover:bg-[#e77063]">
                <FiGithub className="w-full h-full" color="white" />
              </button>
            </a>
            <a href="https://real-estate-teamf.vercel.app/" target="_blank">
              <button className="theme-btn">view demo</button>
            </a>
          </div>
        </div>
        <div className="carousel-image px-5">
          <div
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(${RealEstateDashboard})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <a
              href="https://github.com/YimonA/Real-Estate-Admin-Dashboard"
              target="_blank"
            >
              <button className=" theme-btn-link mr-2 md:mr-4 hover:bg-[#e77063]">
                <FiGithub className="w-full h-full" color="white" />
              </button>
            </a>
            <a
              href="https://real-estate-dashboard-team-f.vercel.app/login"
              target="_blank"
            >
              <button className="theme-btn">view demo</button>
            </a>
          </div>
        </div>
        
        <div className="carousel-image  px-5">
          <div
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(https://wordpressriverthemes.com/HTML/itsme/assets/images/previews/dark.png)`,
            }}
          >
            <a href="https://github.com/YimonA/Portfolio" target="_blank">
              <button className=" theme-btn-link mr-2 md:mr-4 hover:bg-[#e77063]">
                <FiGithub className="w-full h-full" color="white" />
              </button>
            </a>
            <a href="https://portfolio-team-f-ihrm.vercel.app/" target="_blank">
              <button className="theme-btn">view demo</button>
            </a>
          </div>
        </div>
      </Slider>
    </motion.div>
  );
};

export default PortfolioCarousel;
