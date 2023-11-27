import stl from "./Footer.module.css";
import blanklogo from "../../assets/Blanklogo.png";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { LuHardHat } from "react-icons/lu";
import { FaRulerCombined } from "react-icons/fa6";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Footer = ({ setActivePage }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    localStorage.setItem("navbarLocation", path.slice(1));
    if (path === "/") {
      setActivePage("home");
      return;
    }
    setActivePage(path.slice(1));
  };

  return (
    <>
      <div className={stl.footer}>
        <span className={stl.designedBy}></span>
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
          <div className={stl.middleBlock}>
            <ul className={stl.footerList}>
              <li onClick={() => handleNavigation("/")}>
                <IoIosArrowForward className={stl.selectArrow} />
                Home
              </li>
              <li onClick={() => handleNavigation("/portfolio")}>
                <IoIosArrowForward className={stl.selectArrow} />
                Portfolio
              </li>
              <li onClick={() => handleNavigation("/specialiteiten")}>
                <IoIosArrowForward className={stl.selectArrow} />
                Specialiteiten
              </li>
              <li onClick={() => handleNavigation("/projecten")}>
                <IoIosArrowForward className={stl.selectArrow} />
                Projecten
              </li>
              <li onClick={() => handleNavigation("/prijsopgave")}>
                <IoIosArrowForward className={stl.selectArrow} />
                Prijsopgave
              </li>
              <li onClick={() => handleNavigation("/reviews")}>
                <IoIosArrowForward className={stl.selectArrow} />
                Reviews
              </li>
              <li onClick={() => handleNavigation("/contact")}>
                <IoIosArrowForward className={stl.selectArrow} />
                Contact
              </li>
            </ul>
            <div className={stl.socialsBar}>
              <LuInstagram className={stl.socialIcon} />
              <BsTwitterX className={stl.socialIcon} />
              <IoLogoLinkedin className={stl.socialIcon} />
              <FaFacebook className={stl.socialIcon} />
            </div>
          </div>
          <div className={stl.rightBlock}>
            <span className={stl.rightSpan}>
              <FaRulerCombined className={stl.rightBlockIcon} /> Secuur
            </span>
            <span className={stl.rightSpan}>
              <LuHardHat className={stl.rightBlockIcon} /> Vakkundig
            </span>
            <span className={stl.rightSpan}>
              <FaMagnifyingGlassDollar className={stl.rightBlockIcon} />{" "}
              Transparant
            </span>
            <span className={stl.rightSpan}>
              <FaPenNib className={stl.rightBlockIcon} /> Persoonlijk
            </span>
          </div>
        </div>
        <span className={stl.designedBy}>
          Design <br />
          <a href="https://0xWebDev.com" target="_blank" rel="noreferrer">
            0<span className={stl.blueSpan}>x</span>WebDev
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
