import stl from "./PortfolioOverlay.module.css";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
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

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: {
      y: "-40px",
      opacity: 0,
    },
    visible: {
      y: "0px",
      opacity: 1,
    },
  };

  return (
    <AnimatePresence mode="wait">
      {floorChoice && (
        <div className={stl.overlay}>
          <m.div
            className={stl.innerWrap}
            variants={modal}
            initial="hidden"
            exit={{ opacity: 0, y: "-160px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
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
              <p className={stl.story}>
                {currentModal ? currentModal.copy : ""}
              </p>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioOverlay;
