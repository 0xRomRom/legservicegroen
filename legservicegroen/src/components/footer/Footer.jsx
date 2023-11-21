import stl from "./Footer.module.css";
import blanklogo from "../../assets/Blanklogo.png";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className={stl.footer}>
        <div className={stl.innerFooter}>
          <div className={stl.leftBlock}>
            <h2 className={stl.footerTitle}>Legservice</h2>
            <div className={stl.innerBlockWrap}>
              <img
                src={blanklogo}
                alt="Vloeren Leg Service Groen"
                className={stl.footerMainlogo}
              />
              <span className={stl.groen}>Groen</span>
              <div className={stl.blackshape}></div>
            </div>
          </div>
          <div className={stl.rightBlock}>
            <ul className={stl.footerList}>
              <li>Portfolio</li>
              <li>Specialiteiten</li>
              <li>Projecten</li>
              <li>Prijsopgave</li>
              <li>Reviews</li>
              <li>Contact</li>
            </ul>
            <div className={stl.socialsBar}>
              <LuInstagram className={stl.socialIcon} />
              <BsTwitterX className={stl.socialIcon} />
            </div>
          </div>
        </div>
        <span className={stl.designedBy}>
          Design by{" "}
          <a href="https://0xWebDev.com">
            0<span className={stl.blueSpan}>x</span>WebDev
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
