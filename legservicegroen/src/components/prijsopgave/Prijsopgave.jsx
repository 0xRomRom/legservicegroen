import stl from "./Prijsopgave.module.css";
import { motion as m } from "framer-motion";
import { useState } from "react";

const Prijsopgave = () => {
  const [progress, setProgress] = useState(100 / 6);

  const incrementWidth = () => {
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
