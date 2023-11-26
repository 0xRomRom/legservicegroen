import stl from "./Prijsopgave.module.css";
import { motion as m, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { BiMessageSquareError } from "react-icons/bi";

const initialFormstate = {
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
};
const vragenLijst = ["1. Soort opdracht", "2. Opdracht aantal m2", "3. Regio"];

const Prijsopgave = () => {
  const q1Ref = useRef(null);
  const q2Ref = useRef(null);
  const q3Ref = useRef(null);
  const [inputError, setInputError] = useState(false);

  const [progress, setProgress] = useState(100 / 6);
  const [currentQ, setCurrentQ] = useState(1);
  const [questionList, setQuestionList] = useState(vragenLijst);
  const [formState, setFormState] = useState(initialFormstate);

  const progressForm = (e) => {
    e.preventDefault();
    if (currentQ === 1) {
      const q1Value = q1Ref.current.value;
      if (q1Value === "default") {
        setInputError(true);
        return;
      }

      setFormState((prevState) => {
        return {
          ...prevState,
          [currentQ]: vragenLijst[0] + ": " + q1Value,
        };
      });
      setCurrentQ(2);
      incrementWidth();
      return;
    }

    if (currentQ === 2) {
      const q2Value = q2Ref.current.value;
      const isNumber = /^\d+$/.test(q2Value);
      if (!isNumber || q2Value.length < 2) {
        setInputError(true);
        return;
      }
      setFormState((prevState) => {
        return {
          ...prevState,
          [currentQ]: vragenLijst[1] + ": " + q2Value + "m2",
        };
      });
      setCurrentQ(3);
      incrementWidth();
      return;
    }
  };

  useEffect(() => {
    if (currentQ === 2) {
      q2Ref.current.focus();
    }
  }, [currentQ]);

  useEffect(() => {
    if (inputError) {
      setTimeout(() => {
        setInputError(false);
      }, 2000);
    }
  }, [inputError, setInputError]);

  // Progressbar
  const incrementWidth = () => {
    if (progress >= 100) return;
    setProgress(100 / 6 + progress);
  };

  const maxVisibleQ = 6; // Define the maximum value of currentQ for visibility

  return (
    <div className={stl.prijsopgave}>
      <div className={stl.topBlock}>
        <div className={stl.heroBlock}>
          <h1 className={stl.heroTitle}>Prijsopgave</h1>
          <div className={stl.blackShape}> </div>
        </div>
        <p className={stl.heroDesc}>
          Maak snel een schatting van de totale kosten voor uw project.
        </p>
      </div>
      <div className={stl.formWrapper}>
        <AnimatePresence mode="wait">
          {currentQ <= maxVisibleQ && (
            <m.h2
              key={`opdrachtSoort-${currentQ}`}
              className={stl.opdrachtSoort}
              initial={{ opacity: 0, y: "-30px" }}
              animate={{ opacity: 1, y: "0px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              exit={{ opacity: 0, y: "-30px" }}
            >
              {questionList[currentQ - 1]}
            </m.h2>
          )}
        </AnimatePresence>

        <form className={stl.inputWrap}>
          <div className={stl.question}>
            <AnimatePresence>
              {currentQ === 1 && (
                <m.select
                  key={Math.random}
                  className={stl.q1Select}
                  ref={q1Ref}
                  initial={{ opacity: 0, x: "-30px" }}
                  animate={{ opacity: 1, x: "0px" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  exit={{ opacity: 0, x: "-30px" }}
                >
                  <option value="default">Kies opdracht(en)</option>
                  <option value="laminaat_montage">Laminaat montage</option>
                  <option value="pvc_montage">PVC montage</option>
                  <option value="tapijt_montage">Tapijt montage</option>
                  <option value="vloer_demontage">Tegelvloer demontage</option>
                  <option value="vloer_demontage">
                    Tapijt/Parket demontage
                  </option>
                  <option value="vloer_egaliseren">Vloer egaliseren</option>
                </m.select>
              )}

              {currentQ === 2 && (
                <m.input
                  type="text"
                  placeholder="Aantal m2"
                  className={stl.q2Select}
                  ref={q2Ref}
                  initial={{ opacity: 0, x: "-30px" }}
                  animate={{ opacity: 1, x: "0px" }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                  exit={{ opacity: 0, x: "-30px" }}
                />
              )}

              {currentQ === 3 && (
                <m.select
                  className={stl.q1Select}
                  ref={q3Ref}
                  initial={{ opacity: 0, x: "-30px" }}
                  animate={{ opacity: 1, x: "0px" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  exit={{ opacity: 0, x: "-30px", delay: 1.5 }}
                >
                  <option value="default">Kies regio</option>
                  <option value="drenthe">Drenthe</option>
                  <option value="flevoland">Flevoland</option>
                  <option value="friesland">Friesland</option>
                  <option value="gelderland">Gelderland</option>
                  <option value="groningen">Groningen</option>
                  <option value="limburg">Limburg</option>
                  <option value="noord-brabant">Noord-Brabant</option>
                  <option value="noord-Holland">Noord-Holand</option>
                  <option value="overijssel">Overijssel</option>
                  <option value="utrecht">Utrecht</option>
                  <option value="zeeland">Zeeland</option>
                  <option value="zuid-hollanda">Zuid-Holland</option>
                </m.select>
              )}
            </AnimatePresence>
          </div>
          <button
            className={`${stl.nextBtn} ${inputError ? stl.errorRed : ""}`}
            onClick={progressForm}
          >
            {inputError ? "Incorrect" : "Volgende"}{" "}
            {inputError ? (
              <BiMessageSquareError />
            ) : (
              <GrFormNextLink className={stl.ctaArrow} />
            )}
          </button>
        </form>
        <div className={stl.progressBar} onClick={incrementWidth}>
          <m.div
            className={stl.innerProgressBar}
            initial={{ width: `${progress}%` }}
            transition={{ duration: 0.7 }}
            animate={{ width: `${progress}%` }}
          ></m.div>
        </div>
      </div>
    </div>
  );
};

export default Prijsopgave;
