import stl from "./Overlay.module.css";
import { motion as m, AnimatePresence } from "framer-motion";

const Overlay = ({ overlaySrc, setOverlaySrc }) => {
  const closeModal = () => {
    setOverlaySrc("");
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
    <div className={stl.overlay} onClick={closeModal}>
      <div className={stl.imgWrap}>
        <m.img
          src={overlaySrc}
          alt="Parketvloer"
          className={stl.bigImg}
          variants={modal}
          initial="hidden"
          animate={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
};

export default Overlay;
