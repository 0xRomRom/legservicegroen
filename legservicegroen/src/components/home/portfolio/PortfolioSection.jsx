import stl from "./PortfolioSection.module.css";
import { motion as m, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = ({ setFloorChoice }) => {
  const navigate = useNavigate();
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

  const handleNavigation = () => {
    navigate("/portfolio");
  };

  return (
    <div className={stl.portfolio} ref={ref}>
      <m.h2 style={{ y: textY }}>Portfolio</m.h2>
      <div className={stl.modalBox}>
        <div
          className={stl.modalItem}
          onClick={() => {
            handleModalOpen("box1");
          }}
        >
          <h2 className={stl.modalTitle}>Bijkeuken</h2>
          <img src={"/Floor1.jpg"} alt="Floor" className={stl.modalImg} />
        </div>
        <div
          className={stl.modalItem}
          onClick={() => {
            handleModalOpen("box2");
          }}
        >
          <h2 className={stl.modalTitle}>Slaapkamer</h2>
          <img src={"/Floor2.jpg"} alt="Floor" className={stl.modalImg} />
        </div>
        <div
          className={stl.modalItem}
          onClick={() => {
            handleModalOpen("box3");
          }}
        >
          <h2 className={stl.modalTitle}>Woonkamer</h2>
          <img src={"/Floor3.jpg"} alt="Floor" className={stl.modalImg} />
        </div>
        <div
          className={stl.modalItem}
          onClick={() => {
            handleModalOpen("box4");
          }}
        >
          <h2 className={stl.modalTitle}>Kinderkamer</h2>
          <img src={"/Floor4.jpg"} alt="Floor" className={stl.modalImg} />
        </div>
        <m.div
          className={stl.modalItemMeer}
          style={{ y: block }}
          onClick={handleNavigation}
        >
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
