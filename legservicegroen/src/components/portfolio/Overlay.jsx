import stl from "./Overlay.module.css";

const Overlay = ({ overlaySrc, setOverlaySrc }) => {
  const closeModal = () => {
    setOverlaySrc("");
  };

  return (
    <div className={stl.overlay} onClick={closeModal}>
      <div className={stl.imgWrap}>
        <img src={overlaySrc} alt="Parketvloer" className={stl.bigImg} />
      </div>
    </div>
  );
};

export default Overlay;
