import stl from "./Overlay.module.css";
import { motion as m } from "framer-motion";

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
    <m.div
      className={stl.overlay}
      onClick={closeModal}
      variants={modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
    >
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
    </m.div>
  );
};

export default Overlay;
