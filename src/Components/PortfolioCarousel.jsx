import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import RealEstateLight from "../images/RealEstate-Light.png";
import RealEstateDashboard from "../images/RealEstate-Dashboard.png";
import ContactApp from "../images/ContactApp.png";
import GoogleContact from "../images/GoogleContact.png";
import Ecommerce from "../images/E-commerce.png";
import Cashier from "../images/Cashier.png";
import POS from "../images/POS.png";
import BayDin from "../images/BayDin.png";
import IntranetDashboard from "../images/Intranet-Dashboard.png";
import Invoice from "../images/Invoice.png";

const PortfolioCarousel = () => {
  const projects = useState([
    {
      id: 1,
      img: Invoice,
      github_link: "https://github.com/YimonA/Invoice-App",
      demo_link: "https://invoice-app-yimona.vercel.app/",
    },
    {
      id: 2,
      img: RealEstateDashboard,
      github_link: "https://github.com/YimonA/Real-Estate-Admin-Dashboard",
      demo_link: "https://real-estate-dashboard-team-f.vercel.app/login",
    },
    {
      id: 3,
      img: RealEstateLight,
      github_link: "https://github.com/YimonA/Real-Estate",
      demo_link: "https://real-estate-teamf.vercel.app/",
    },
    {
      id: 4,
      img: Ecommerce,
      github_link: "https://github.com/YimonA/RTK-Shopping-Cart",
      demo_link: "https://shopping-cart-yimona.vercel.app/",
    },
    {
      id: 5,
      img: Cashier,
      github_link: "https://github.com/YimonA/Cashier",
      demo_link: "https://cashier-three.vercel.app/",
    },
    {
      id: 6,
      img: GoogleContact,
      github_link: "https://github.com/YimonA/google-contact",
      demo_link: "https://google-contact-ten.vercel.app/",
    },
    {
      id: 7,
      img: ContactApp,
      github_link: "https://github.com/YimonA/Contact-App",
      demo_link: "https://contact-app-yimona.vercel.app/login",
    },
    {
      id: 8,
      img: IntranetDashboard,
      github_link: "https://github.com/YimonA/INTRANET-Dashboard",
      demo_link: "https://intranet-dashboard.vercel.app",
    },
    {
      id: 9,
      img: BayDin,
      github_link: "https://github.com/YimonA/BayDin",
      demo_link: "https://bay-din-five.vercel.app",
    },
    // {
    //   id: 10,
    //   img: POS,
    //   github_link: "https://github.com/YimonA/POS",
    //   demo_link: "https://pos-one-pi.vercel.app",
    // },
    
  ]);
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
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: false }}
      className=""
    >
      <Slider {...settings}>
      {projects[0].map(project=>{
        return(
          <div key={project.id} className="carousel-image  px-5">
          <div
            className={`image hover:bg-bottom bg-[#161618]`}
            style={{
              backgroundImage: `url(${project.img})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href={`${project?.github_link}`} target="_blank">
              <button className=" theme-btn-link mr-2 md:mr-4 hover:bg-[#e77063]">
                <FiGithub className="w-full h-full" color="white" />
              </button>
            </a>
            <a href={`${project?.demo_link}`} target="_blank">
              <button className="theme-btn">view demo</button>
            </a>
          </div>
        </div>
        )
      })}
      </Slider>
    </motion.div>
  );
};

export default PortfolioCarousel;
