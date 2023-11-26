import stl from "./Reviews.module.css";
import Lottie from "lottie-react";
import reviewAnimation from "../../assets/Review.json";
import { motion as m } from "framer-motion";
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

  initializeApp(firebaseConfig);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const addReview = (name, jobtype, rating, copyTxt) => {
    const db = getDatabase();
    set(refs(db, `reviews/${Math.floor(Math.random() * 1000000000)}`), {
      name: name,
      job_type: jobtype,
      rating: rating + "/10",
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
      {addingReview && (
        <AddReview setAddingReview={setAddingReview} addReview={addReview} />
      )}

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
            {inView && <NumberCounter n={9.3} />}
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
              <div className={stl.reviewTile} key={index}>
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
                  <div className={stl.userRating}>{review.rating}</div>
                </div>
                <div className={stl.userCopyWrap}>
                  <p className={stl.userCopy}>"{review.copy}"</p>
                </div>
              </div>
            );
          })}

        <div
          className={`${stl.reviewTile} ${stl.addReviewTile}`}
          onClick={openReviewModal}
        >
          <FaPlus className={stl.addIcon} />
          <h3 className={stl.addReviewText}>Plaats review</h3>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
