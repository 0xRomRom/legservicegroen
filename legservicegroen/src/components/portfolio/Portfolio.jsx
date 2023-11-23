import stl from "./Portfolio.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion as m } from "framer-motion";
import Overlay from "./Overlay";
import { useState } from "react";

const Portfolio = () => {
  const [overlaySrc, setOverlaySrc] = useState("");

  const handleModalOpen = (newSrc) => {
    setOverlaySrc(newSrc);
  };

  return (
    <>
      {overlaySrc && (
        <Overlay overlaySrc={overlaySrc} setOverlaySrc={setOverlaySrc} />
      )}
      <div className={stl.portfolio}>
        <div className={stl.topBlock}>
          <div className={stl.flexdiv}>
            <h1>Portfolio</h1>
            <div className={stl.blackshape}></div>
          </div>
          <p className={stl.portfolioDesc}>
            Neem gerust een kijkje in ons portfolio om een glimp op te vangen
            van de diversiteit en kwaliteit van ons werk. We geloven dat beelden
            meer zeggen dan woorden, en ons portfolio is een levendig bewijs van
            ons vakmanschap.
          </p>
        </div>
        <div className={stl.tilesGrid}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              <m.img
                src="./Floor1.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ ease: "easeInOut" }}
                onClick={() => handleModalOpen("./Floor1.jpg")}
              />
              <m.img
                src="./Floor2.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor3.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor4.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor1.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor2.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor3.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor4.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor1.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor2.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor3.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor4.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor2.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor3.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor4.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor1.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor2.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor3.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
              <m.img
                src="./Floor4.jpg"
                alt="Floor image"
                className={stl.tileImg}
                initial={{ opacity: 0, y: "5px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5 }}
              />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
