import stl from "./CtaBox.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { RiMoneyEuroBoxFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CtaBox = ({ setActivePage }) => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    setActivePage(path.slice(1));
  };

  return (
    <div className={stl.ctaBox}>
      <div className={`${stl.curvedDiv} ${stl.upper}`}>
        <p className={stl.fillerspan}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci
          lorem, porttitor nec vulputate sit amet, fermentum a purus. Curabitur
          ullamcorper tellus orci, vel mattis sapien pretium eget. Sed iaculis
          sit amet elit non molestie. Vestibulum sit amet massa nunc. Donec ante
          tortor, molestie in augue vitae, vestibulum posuere est. Phasellus sed
          maximus purus. Praesent justo massa, porta sit amet lacinia non,
          tincidunt vitae nunc. Praesent sagittis elit at lacus condimentum
          ullamcorper. Mauris eu leo nec dolor molestie fermentum.
        </p>
        <svg viewBox="0 0 1440 319">
          <path
            fill="#67CACF"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className={stl.curvedDiv}>
        <m.h1
          className={stl.heroTitle}
          initial={{ opacity: 0, y: "-20px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1 }}
        >
          Ik ben op zoek naar
        </m.h1>
        <div className={stl.ctaOptions}>
          <m.button
            className={stl.ctaBtn}
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            onClick={() => handleNavigation("/portfolio")}
          >
            Inspiratie <FaPaintBrush className={stl.ctaIcon} />
          </m.button>
          <m.button
            className={stl.ctaBtn}
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.35, ease: "easeIn" }}
            onClick={() => handleNavigation("/reviews")}
          >
            Recensies <MdOutlineReviews className={stl.ctaIcon} />
          </m.button>
          <m.button
            className={stl.ctaBtn}
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            onClick={() => handleNavigation("/prijsopgave")}
          >
            Tarieven <RiMoneyEuroBoxFill className={stl.ctaIcon} />
          </m.button>
          <m.button
            className={stl.ctaBtn}
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.45, ease: "easeIn" }}
            onClick={() => handleNavigation("/contact")}
          >
            Persoonlijk contact <BsPeopleFill className={stl.ctaIcon} />
          </m.button>
        </div>
        <svg viewBox="0 0 1440 319">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CtaBox;
