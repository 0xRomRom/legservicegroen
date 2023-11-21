import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import stl from "./Klantwaardering.module.css";
import NumberCounter from "./NumberCounter";
import { motion as m } from "framer-motion";

const Klantwaardering = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className={stl.Klantwaardering}>
      <h2 className={stl.heroTitle}>Gemiddelde klantwaardering</h2>
      <m.span
        className={stl.rating}
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.75 }}
      >
        {inView && <NumberCounter n={8.9} />}
        {inView && "/10"}
      </m.span>
    </div>
  );
};

export default Klantwaardering;
