import stl from "./Prijsopgave.module.css";
import { motion as m } from "framer-motion";
import { useState, useRef, useEffect } from "react";
const initialFormstate = {
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
};
const vragenLijst = ["1. Soort opdracht", "2. Opdracht aantal m2"];

const Prijsopgave = () => {
  const q1Ref = useRef(null);
  const q2Ref = useRef(null);

  const [progress, setProgress] = useState(100 / 6);
  const [currentQ, setCurrentQ] = useState("1");
  const [questionList, setQuestionList] = useState(vragenLijst);
  const [formState, setFormState] = useState(initialFormstate);

  const progressForm = (e) => {
    e.preventDefault();
    const q1Value = q1Ref.current.value;
    if (q1Value !== "default") {
      setFormState((prevState) => {
        return {
          ...prevState,
          [currentQ]: q1Value,
        };
      });
      setCurrentQ("2");
      incrementWidth();
      return;
    }

    const q2Value = q2Ref.current.value;
    if (q1Value !== "default") {
      setFormState((prevState) => {
        return {
          ...prevState,
          [currentQ]: q2Value,
        };
      });
      setCurrentQ("3");
      return;
    }
  };

  useEffect(() => {
    console.log(formState);
    if (currentQ === 2) {
      setTimeout(() => {
        q2Ref.focus();
      }, 1000);
    }
  }, [formState, currentQ]);

  // Progressbar
  const incrementWidth = () => {
    if (progress >= 100) return;
    setProgress(100 / 6 + progress);
  };

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
        <h2 className={stl.opdrachtSoort}>{questionList[currentQ - 1]}</h2>

        <form className={stl.inputWrap}>
          <div className={stl.question}>
            {currentQ === "1" && (
              <div className={stl.question1}>
                <select className={stl.q1Select} ref={q1Ref}>
                  <option value="default">Kies opdracht</option>
                  <option value="laminaat_montage">Laminaat montage</option>
                  <option value="pvc_montage">PVC montage</option>
                  <option value="tapijt_montage">Tapijt montage</option>
                  <option value="vloer_demontage">Tegelvloer demontage</option>
                  <option value="vloer_demontage">
                    Tapijt/Parket vloer demontage
                  </option>
                  <option value="vloer_egaliseren">Vloer egaliseren</option>
                </select>
              </div>
            )}
            {currentQ === "2" && (
              <div className={stl.question1}>
                <input
                  type="text"
                  placeholder="Aantal m2"
                  className={stl.q2Select}
                  ref={q2Ref}
                />
              </div>
            )}

            <button className={stl.nextBtn} onClick={progressForm}>
              Volgende
            </button>
          </div>
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
