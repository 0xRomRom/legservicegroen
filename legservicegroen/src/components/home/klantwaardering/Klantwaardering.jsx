import { useInView } from "react-intersection-observer";
import stl from "./Klantwaardering.module.css";
import NumberCounter from "./NumberCounter";
import { motion as m } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Lottie from "lottie-react";
import animationRating from "../../../assets/ratinganimation.json";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDatabase, get, ref as refs, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../utils/firebaseConfig";

const Klantwaardering = ({ setActivePage }) => {
  initializeApp(firebaseConfig);
  const [averageRating, setAverageRating] = useState(9);
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const handleNavigation = () => {
    navigate("/reviews");
    setActivePage("reviews");
  };

  useEffect(() => {
    const dbRef = refs(getDatabase());
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          snapshot.forEach((review) => {
            const reviewCount = Object.entries(review.val()).length;
            console.log(reviewCount);
            let count = 0;
            review.forEach((item) => {
              const finalRes = +item.val().rating;
              count += finalRes;
            });
            const average = +(count / reviewCount).toFixed(2);
            console.log(average);
            setAverageRating(average);
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
          {inView && <NumberCounter n={averageRating} />}
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
