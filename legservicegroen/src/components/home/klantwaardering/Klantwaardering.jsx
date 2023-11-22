import { useInView } from "react-intersection-observer";
import stl from "./Klantwaardering.module.css";
import NumberCounter from "./NumberCounter";
import { motion as m } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Lottie from "lottie-react";
import animationRating from "../../../assets/ratinganimation.json";
import { useNavigate } from "react-router-dom";

const Klantwaardering = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const handleNavigation = () => {
    navigate("/reviews");
  };

  return (
    <div className={stl.Klantwaardering}>
      <div className={stl.ratingWrap}>
        <m.h2
          className={stl.heroTitle}
          initial={{ opacity: 0, y: "-20px" }}
          whileInView={{ opacity: 1, y: "30px" }}
          transition={{ duration: 1.25 }}
        >
          Gemiddelde klantwaardering
        </m.h2>
        <m.span
          className={stl.rating}
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.75 }}
        >
          {inView && <NumberCounter n={9.3} />}
          {inView && " / 10"}
        </m.span>
      </div>
      <Lottie animationData={animationRating} className={stl.lottieAnimation} />
      <div className={stl.reviewRow}>
        <div className={stl.btnwrap} onClick={handleNavigation}>
          <span className={stl.ziereviews}>Zie reviews</span>
          <FaArrowRight className={stl.arrow} />
        </div>
      </div>
    </div>
  );
};

export default Klantwaardering;
