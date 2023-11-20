import stl from "./Portfolio.module.css";
import { motion as m } from "framer-motion";

const Portfolio = () => {
  return (
    <m.div
      className={stl.portfolio}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    ></m.div>
  );
};

export default Portfolio;
