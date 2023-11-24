import stl from "./Header.module.css";
import Floor1 from "../../../assets/Floor1.jpg";
import Floor2 from "../../../assets/Floor2.jpg";
import Floor3 from "../../../assets/Floor3.jpg";
import Floor4 from "../../../assets/Floor4.jpg";
import Blanklogo from "../../../assets/Blanklogo.png";
import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
const floorTypes = ["Klassiek", "PVC", "Breed", "Eik"];
const floorImages = [Floor1, Floor2, Floor3, Floor4];
const Header = () => {
  const [currentImage, setCurrentImage] = useState(Floor1);
  const [floorType, setFloorType] = useState("Hout");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % floorTypes.length);

      setFloorType(floorTypes[currentImageIndex]);
      setCurrentImage(floorImages[currentImageIndex]);
    }, 4000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <header className={stl.header}>
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
        <m.span
          className={stl.floortype}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {floorType}
        </m.span>
        <AnimatePresence mode="wait">
          <m.img
            key={currentImage}
            src={currentImage}
            alt="Floor"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
