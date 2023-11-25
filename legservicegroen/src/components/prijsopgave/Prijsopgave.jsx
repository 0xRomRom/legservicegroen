import stl from "./Prijsopgave.module.css";
import { motion as m } from "framer-motion";
import { useState } from "react";

const Prijsopgave = () => {
  const [progress, setProgress] = useState(100 / 6);
  const [currentQuestion, setCurrentQuestion] = useState("q1");

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
        <h2 className={stl.opdrachtSoort}>Soort opdracht</h2>
        <form className={stl.inputWrap}>
          <div className={`${stl.question} ${stl.question1}`}>
            <select className={stl.q1Select}>
              <option value="hello">Maak keuze</option>
              <option value="hello">Hello</option>
              <option value="hello">Hello</option>
              <option value="hello">Hello</option>
            </select>
            <button className={stl.nextBtn}>Volgende</button>
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
