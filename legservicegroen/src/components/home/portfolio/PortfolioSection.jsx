import stl from "./PortfolioSection.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  return (
    <div className={stl.portfolio} ref={ref}>
      <motion.h2 style={{ y: textY }}>Hello</motion.h2>
      <motion.div
        className={stl.bgbox}
        style={{
          backgroundImage: "url(./Floor1.jpg)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
    </div>
  );
};

export default Portfolio;
