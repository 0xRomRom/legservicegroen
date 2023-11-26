import stl from "./Contact.module.css";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/Contact.json";

const Contact = () => {
  return (
    <div className={stl.contact}>
      <svg viewBox="0 0 1440 319" className={stl.cornerSvg}>
        <path
          fill="#FFF"
          fillOpacity="1"
          d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className={stl.contactWrap}>
        <h1 className={stl.heroTitle}>Contact</h1>
        <div className={stl.blackShape}> </div>
      </div>
      <div className={stl.modalWrap}>
        <Lottie
          animationData={contactAnimation}
          className={stl.lottieAnimation}
        />
      </div>
    </div>
  );
};

export default Contact;
