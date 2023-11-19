import stl from "./Header.module.css";
import Floor1 from "../../../assets/Floor1.jpg";
import Floor2 from "../../../assets/Floor2.jpg";
import Floor3 from "../../../assets/Floor3.jpg";
import Blanklogo from "../../../assets/Blanklogo.png";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

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
  }, []);

  return (
    <m.header
      className={stl.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className={stl.leftblock}>
        <h1>Legservice</h1>
        <div className={stl.flexdiv}>
          <img
            src={Blanklogo}
            alt="Legservice groen"
            className={stl.blanklogo}
          />
          <h2>Groen</h2>
          <div className={stl.blackshape}></div>
        </div>
      </div>
      <div className={stl.rightblock}>
        <span className={stl.floortype}>{floorType}</span>
        <img src={currentImage} alt="Floor" />
      </div>
    </m.header>
  );
};

export default Header;
