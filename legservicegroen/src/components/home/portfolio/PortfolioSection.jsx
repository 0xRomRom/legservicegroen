import stl from "./PortfolioSection.module.css";
import { motion as m, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Portfolio = ({ setFloorChoice }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-100%", "700%"]);
  const block = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  const handleModalOpen = (floorType) => {
    setFloorChoice(floorType);
  };

  return (
    <div className={stl.portfolio} ref={ref}>
      <m.h2 style={{ y: textY }}>Portfolio</m.h2>
      <div
        className={stl.modalBox}
        onClick={() => {
          handleModalOpen("bijkeuken");
        }}
      >
        <div className={stl.modalItem}>
          <h2 className={stl.modalTitle}>Bijkeuken</h2>
          <img src={"/Floor1.jpg"} alt="Floor" className={stl.modalImg} />
        </div>
        <div className={stl.modalItem}>
          <h2 className={stl.modalTitle}>Slaapkamer</h2>
          <img src={"/Floor2.jpg"} alt="Floor" className={stl.modalImg} />
        </div>
        <div className={stl.modalItem}>
          <h2 className={stl.modalTitle}>Woonkamer</h2>
          <img src={"/Floor3.jpg"} alt="Floor" className={stl.modalImg} />
        </div>
        <div className={stl.modalItem}>
          <h2 className={stl.modalTitle}>Kinderkamer</h2>
          <img src={"/Floor4.jpg"} alt="Floor" className={stl.modalImg} />
        </div>
        <m.div className={stl.modalItemMeer} style={{ y: block }}>
          <h2 className={stl.modalTitleMeer}>Meer</h2>
        </m.div>
      </div>
      <m.div
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
