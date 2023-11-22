import stl from "./PortfolioOverlay.module.css";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import portfolioObject from "../../utils/portfolioObject";

const PortfolioOverlay = ({ setFloorChoice, floorChoice }) => {
  const [currentModal, setCurrentModal] = useState(null);

  const handleModalClose = () => {
    setFloorChoice("");
    setCurrentModal(null);
  };

  useEffect(() => {
    if (floorChoice === "box1") {
      const obj = portfolioObject[0];
      setCurrentModal(obj);
    }
    if (floorChoice === "box2") {
      const obj = portfolioObject[1];
      setCurrentModal(obj);
    }
    if (floorChoice === "box3") {
      const obj = portfolioObject[2];
      setCurrentModal(obj);
    }
    if (floorChoice === "box4") {
      const obj = portfolioObject[3];
      setCurrentModal(obj);
    }
  }, [floorChoice]);

  return (
    <div className={stl.overlay} key={Math.random()}>
      <m.div
        className={stl.innerWrap}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className={stl.topDiv}>
          <div className={stl.closeWrap}>
            <CgClose className={stl.close} onClick={handleModalClose} />
          </div>
          <img
            src={currentModal ? currentModal.imgSrc : ""}
            alt="Floor"
            className={stl.floorImg}
          />
          <h2 className={stl.floorTitle}>
            {currentModal ? currentModal.title : ""}
          </h2>
        </div>
        <div>
          <p className={stl.story}>{currentModal ? currentModal.copy : ""}</p>
        </div>
      </m.div>
    </div>
  );
};

export default PortfolioOverlay;
