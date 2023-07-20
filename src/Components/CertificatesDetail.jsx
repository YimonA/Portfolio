import React, { useState } from "react";
import Badges from "./Badges";
import { motion } from "framer-motion";

const CertificatesDetail = () => {
    const [skills, setSkills] = useState([
        "Special Web Design Course (MMS One Stop It Solutions)",
        "Basic Web Design Course (MMS One Stop It Solutions)",
        "Advanced certificate in Software Engineering (KMD)",
        "MOS office PowerPoint 2013",
        "Microsoft office 2013 (KMD)",
      ]);
  return (
    <div className="mt-10">
      <Badges>Certificates</Badges>
      <motion.h2
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false }}
        className="header-2 "
      >
        my certificates
      </motion.h2>
      <motion.ul
          initial={{ y: 110 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: false }}
          className=" ps-5 mt-10">
        {skills?.map((skill) => {
          return (
            <li className="list-disc mb-3 xl:mb-5 text-base font-medium">{skill}</li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default CertificatesDetail;
