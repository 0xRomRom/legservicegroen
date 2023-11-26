import stl from "./AddReview.module.css";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { BsEnvelopeCheckFill } from "react-icons/bs";

const AddReview = ({ setAddingReview }) => {
  const [slideValue, setSlideValue] = useState(5.5);
  const [currentMsgLen, setCurrentMsgLen] = useState(0);
  const sliderRef = useRef();
  const copyRef = useRef();

  const updateSliderVlaue = () => {
    setSlideValue(sliderRef.current.value);
  };

  const closeAddingReview = () => {
    setAddingReview(false);
  };

  const handleCopyForm = () => {
    const len = copyRef.current.value.length;
    setCurrentMsgLen(len);
  };

  return (
    <div className={stl.addreview}>
      <div className={stl.reviewModal}>
        <div className={stl.closeRow}>
          <IoClose className={stl.closeBtn} onClick={closeAddingReview} />
        </div>
        <form className={stl.reviewForm}>
          <input type="text" placeholder="Naam" className={stl.nameIput} />
          <select className={stl.opdrachtSelect}>
            <option value="default">Soort opdracht</option>
            <option value="laminaat_montage">Laminaat montage</option>
            <option value="pvc_montage">PVC montage</option>
            <option value="tapijt_montage">Tapijt montage</option>
            <option value="vloer_demontage">Tegelvloer demontage</option>
            <option value="vloer_demontage">Tapijt/Parket demontage</option>
            <option value="vloer_egaliseren">Vloer egaliseren</option>
          </select>
          <div className={stl.ratingDiv}>
            <span className={stl.ratingSpan}>
              {slideValue}/10 <FaStar className={stl.star} />
            </span>
            <input
              type="range"
              min="1"
              max="10"
              step="0.1"
              value={slideValue}
              className={stl.rangeSlider}
              ref={sliderRef}
              onChange={updateSliderVlaue}
            />
          </div>
          <textarea
            className={stl.reviewCopy}
            ref={copyRef}
            onChange={handleCopyForm}
            value={copyRef.current?.value}
            maxLength="335"
            placeholder="Uw bericht"
          ></textarea>
          <span className={stl.currMessLen}>{currentMsgLen} / 335</span>
          <button className={stl.verzenden}>
            Verzenden <BsEnvelopeCheckFill className={stl.envelope} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
