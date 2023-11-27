import stl from "./Reviews.module.css";
import Lottie from "lottie-react";
import reviewAnimation from "../../assets/Review.json";
import { motion as m, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NumberCounter from "../home/klantwaardering/NumberCounter";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getDatabase, get, ref as refs, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../utils/firebaseConfig";
import AddReview from "./AddReview";

const Reviews = () => {
  const [fetchedReviews, setFetchedReviews] = useState([]);
  const [addingReview, setAddingReview] = useState(false);
  const [averageRating, setAverageRating] = useState(9);
  const [hasReviewed, setHasReviewed] = useState(false);

  initializeApp(firebaseConfig);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const dbRef = refs(getDatabase());
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((review) => {
            const reviewCount = Object.entries(review.val()).length;
            let count = 0;
            review.forEach((item) => {
              const finalRes = +item.val().rating;
              count += finalRes;
            });
            const average = +(count / reviewCount).toFixed(2);
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

  const addNewReview = (name, jobtype, rating, copyTxt) => {
    const db = getDatabase();
    set(refs(db, `reviews/${Math.floor(Math.random() * 1000000000)}`), {
      name: name,
      job_type: jobtype,
      rating: rating,
      copy: copyTxt,
    });
  };

  const openReviewModal = () => {
    setAddingReview(true);
  };

  useEffect(() => {
    const dbRef = refs(getDatabase());
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setFetchedReviews([snapshot.val().reviews]);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={stl.reviews}>
      <AnimatePresence mode="wait">
        {addingReview && (
          <AddReview
            setAddingReview={setAddingReview}
            addingReview={addingReview}
            addNewReview={addNewReview}
            setHasReviewed={setHasReviewed}
            hasReviewed={hasReviewed}
          />
        )}
      </AnimatePresence>

      <div className={stl.topBlock}>
        <div className={stl.heroBlock}>
          <h1 className={stl.heroTitle}>Reviews</h1>
          <div className={stl.blackShape}> </div>
        </div>
        <p className={stl.heroDesc}>
          Lees wat onze klanten vertellen over onze dienstverlening.
        </p>
      </div>
      <div className={stl.reviewsWrapper}>
        <div className={stl.ratingWrap}>
          <m.h2
            className={stl.subHeroTitle}
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

        <Lottie
          animationData={reviewAnimation}
          className={stl.lottieAnimation}
        />
      </div>
      <div className={stl.reviewsGrid}>
        {fetchedReviews[0] &&
          Object.entries(fetchedReviews[0]).map(([key, review], index) => {
            return (
              <m.div
                className={stl.reviewTile}
                key={index}
                initial={{ opacity: 0, y: "-30px" }}
                whileInView={{ opacity: 1, y: "0px", duration: 0.4 }}
                animate={{ opacity: 1, y: "30px" }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
              >
                <div className={stl.revToprow}>
                  <img
                    src="./Floor4.jpg"
                    alt="User profile"
                    className={stl.userImg}
                  />
                  <div className={stl.firstBlock}>
                    <span className={stl.userName}>{review.name}</span>
                    <span className={stl.jobType}>{review.job_type}</span>
                  </div>
                  <div className={stl.userRating}>{review.rating}/10</div>
                </div>
                <div className={stl.userCopyWrap}>
                  <p className={stl.userCopy}>"{review.copy}"</p>
                </div>
              </m.div>
            );
          })}

        <m.div
          className={`${stl.reviewTile} ${stl.addReviewTile}`}
          onClick={openReviewModal}
          initial={{ opacity: 0, y: "-30px" }}
          whileInView={{ opacity: 1, y: "0px", duration: 0.4 }}
          animate={{ opacity: 1, y: "30px" }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        >
          <FaPlus className={stl.addIcon} />
          <h3 className={stl.addReviewText}>Plaats review</h3>
        </m.div>
      </div>
    </div>
  );
};

export default Reviews;
