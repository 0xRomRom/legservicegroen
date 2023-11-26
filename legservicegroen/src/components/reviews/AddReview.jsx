import stl from "./AddReview.module.css";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { BsEnvelopeCheckFill } from "react-icons/bs";

const AddReview = ({ setAddingReview, addReview }) => {
  const [slideValue, setSlideValue] = useState(5.5);
  const [currentMsgLen, setCurrentMsgLen] = useState(0);
  const sliderRef = useRef();
  const nameRef = useRef();
  const opdrachtRef = useRef();
  const copyRef = useRef();

  const [nameError, setNameError] = useState(false);
  const [opdrachtError, setOpdrachtError] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const updateSliderVlaue = () => {
    setSlideValue(sliderRef.current.value);
  };

  const closeAddingReview = () => {
    setAddingReview(false);
  };

  const handleMessageLength = () => {
    const len = copyRef.current.value.length;
    setCurrentMsgLen(len);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setCopyError(false);
    setOpdrachtError(false);
    const rating = sliderRef.current.value;
    const naam = nameRef.current.value;
    const opdracht = opdrachtRef.current.value;
    const bericht = copyRef.current.value;
    if (naam === "" || naam === " ") {
      setNameError(true);
    }
    if (bericht === "" || bericht === " " || bericht.length < 30) {
      setCopyError(true);
    }
    if (opdracht === "default") {
      setOpdrachtError(true);
    }
    addReview(naam, opdracht, rating, bericht);
  };

  return (
    <div className={stl.addreview}>
      <div className={stl.reviewModal}>
        <div className={stl.closeRow}>
          <IoClose className={stl.closeBtn} onClick={closeAddingReview} />
        </div>
        <form className={stl.reviewForm}>
          <input
            type="text"
            placeholder="Naam"
            className={`${stl.nameInput} ${nameError ? stl.errorBorder : ""}`}
            ref={nameRef}
          />
          <select
            className={`${stl.opdrachtSelect} ${
              opdrachtError ? stl.errorBorder : ""
            }`}
            ref={opdrachtRef}
          >
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
            className={`${stl.reviewCopy} ${copyError ? stl.errorBorder : ""}`}
            ref={copyRef}
            onChange={handleMessageLength}
            value={copyRef.current?.value}
            maxLength="335"
            placeholder="Uw bericht"
          ></textarea>
          <span className={stl.currMessLen}>{currentMsgLen} / 335</span>
          <button className={stl.verzenden} onClick={handleFormSubmit}>
            Verzenden <BsEnvelopeCheckFill className={stl.envelope} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
