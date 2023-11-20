import stl from "./Header.module.css";
import Floor1 from "../../../assets/Floor1.jpg";
import Floor2 from "../../../assets/Floor2.jpg";
import Floor3 from "../../../assets/Floor3.jpg";
import Blanklogo from "../../../assets/Blanklogo.png";
import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

const Header = () => {
  const [floorType, setFloorType] = useState("Hout");
  const [currentImage, setCurrentImage] = useState(Floor1);
  const floorTypes = ["Hout", "PVC", "Beton"];
  const floorImages = [Floor1, Floor2, Floor3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random index to choose a different floor type
      const randomIndex = Math.floor(Math.random() * floorTypes.length);
      setFloorType(floorTypes[randomIndex]);
      setCurrentImage(floorImages[randomIndex]);
    }, 4000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [floorImages, floorTypes]);

  return (
    <m.header
      className={stl.header}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      exit={{ opacity: 1 }}
    >
      <div className={stl.leftblock}>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Legservice
        </m.h1>
        <m.div
          className={stl.flexdiv}
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img
            src={Blanklogo}
            alt="Legservice groen"
            className={stl.blanklogo}
          />
          <h2>Groen</h2>
          <div className={stl.blackshape}></div>
        </m.div>
      </div>
      <div className={stl.rightblock}>
        <span className={stl.floortype}>{floorType}</span>
        <AnimatePresence mode="wait">
          <m.img
            key={currentImage}
            src={currentImage}
            alt="Floor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>
    </m.header>
  );
};

export default Header;
