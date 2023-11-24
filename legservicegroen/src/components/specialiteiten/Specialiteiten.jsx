import React, { useState } from "react";
import stl from "./Specialiteiten.module.css";
import { laminaatSoorten, pvcSoorten } from "../utils/portfoliosoorten";

const Specialiteiten = () => {
  const [activeButton, setActiveButton] = useState("Laminaat");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={stl.specialiteiten}>
      <div className={stl.topBlock}>
        <div className={stl.flexdiv}>
          <h1>Specialiteiten</h1>
          <div className={stl.blackshape}></div>
        </div>
        <p className={stl.portfolioDesc}>
          Welkom bij Legservice Groen, waar we trots zijn op het leveren van
          hoogwaardige vloerdiensten die voldoen aan al uw wensen en eisen. Onze
          deskundige vakmensen staan klaar om u te assisteren bij elke fase van
          uw vloerproject. Of u nu een nieuwe vloer wilt laten installeren, een
          bestaande vloer wilt laten renoveren of simpelweg periodiek onderhoud
          nodig heeft.
        </p>
      </div>
      <div className={stl.optionMenu}>
        <button
          className={`${stl.btn} ${
            activeButton === "Laminaat" ? stl.active : ""
          }`}
          onClick={() => handleButtonClick("Laminaat")}
        >
          <div
            className={`${stl.innerBtn} ${
              activeButton === "Laminaat" ? stl.folded : ""
            }`}
          >
            Laminaat
          </div>
        </button>

        <button
          className={`${stl.btn} ${activeButton === "PVC" ? stl.active : ""}`}
          onClick={() => handleButtonClick("PVC")}
        >
          <div
            className={`${stl.innerBtn} ${
              activeButton === "PVC" ? stl.folded : ""
            }`}
          >
            PVC
          </div>
        </button>

        <button
          className={`${stl.btn} ${
            activeButton === "Tapijt" ? stl.active : ""
          }`}
          onClick={() => handleButtonClick("Tapijt")}
        >
          <div
            className={`${stl.innerBtn} ${
              activeButton === "Tapijt" ? stl.folded : ""
            }`}
          >
            Tapijt
          </div>
        </button>

        <button
          className={`${stl.btn} ${
            activeButton === "Egaliseren" ? stl.active : ""
          }`}
          onClick={() => handleButtonClick("Egaliseren")}
        >
          <div
            className={`${stl.innerBtn} ${
              activeButton === "Egaliseren" ? stl.folded : ""
            }`}
          >
            Egaliseren
          </div>
        </button>
      </div>
      <div className={stl.specialtyWrapper}>
        {activeButton === "Laminaat" && (
          <>
            {laminaatSoorten.map((soort, index) => (
              <div className={stl.gridItem} key={index}>
                <div className={stl.innerGridItem}>
                  <span className={stl.tileCopy}>{soort.copy}</span>
                  <img
                    src={soort.src}
                    alt="Vloertype"
                    className={stl.tileImg}
                  />
                </div>
              </div>
            ))}
          </>
        )}
        {activeButton === "PVC" && (
          <>
            {pvcSoorten.map((soort, index) => (
              <div className={stl.gridItem} key={index}>
                <div className={stl.innerGridItem}>
                  <span className={stl.tileCopy}>{soort.copy}</span>
                  <img
                    src={soort.src}
                    alt="Vloertype"
                    className={stl.tileImg}
                  />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Specialiteiten;
