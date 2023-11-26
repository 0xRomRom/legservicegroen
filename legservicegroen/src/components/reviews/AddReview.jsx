import stl from "./AddReview.module.css";
import { IoClose } from "react-icons/io5";

const AddReview = ({ setAddingReview }) => {
  const closeAddingReview = () => {
    setAddingReview(false);
  };
  return (
    <div className={stl.addreview}>
      <div className={stl.reviewModal}>
        <div className={stl.closeRow}>
          <IoClose className={stl.closeBtn} onClick={closeAddingReview} />
        </div>
      </div>
    </div>
  );
};

export default AddReview;
