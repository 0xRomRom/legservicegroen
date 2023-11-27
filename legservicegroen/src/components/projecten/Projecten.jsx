import stl from "./Projecten.module.css";
import { FaCheckDouble } from "react-icons/fa6";
import { motion as m } from "framer-motion";
import Lottie from "lottie-react";
import construction from "../../assets/Construction.json";
import connection from "../../assets/Connection.json";
import { useNavigate } from "react-router-dom";

const Projecten = ({ setActivePage }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
    setActivePage("contact");
  };

  return (
    <div className={stl.projecten}>
      <div className={stl.topWrap}>
        <h1>Projecten</h1>
      </div>
      <div className={stl.mainContent}>
        <div className={stl.heroWrap}>
          <m.h2
            className={stl.productenHero}
            initial={{ opacity: 0, y: "-50%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            Ook hét adres voor grote projecten
          </m.h2>
          <m.p
            className={stl.projectCopy1}
            initial={{ opacity: 0, y: "-20%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            Bent u opzoek naar een dienstverlener voor grotere oppervlaktes?
            <br /> Wij van Legservice Groen gaan graag in gesprek met u over de
            mogelijkheden. Of het gaat om het verwijderen van de huidige vloer,
            het plaatsen van een nieuwe vloer of egaliseren, geen uitdaging is
            te groot!
          </m.p>
        </div>
        <div className={stl.possibleBanner}>
          <m.div
            className={stl.bannerItem}
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.75 }}
          >
            <FaCheckDouble />
            Kantoorpanden
          </m.div>
          <m.div
            className={stl.bannerItem}
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <FaCheckDouble />
            Fabriekshallen
          </m.div>
          <m.div
            className={stl.bannerItem}
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            <FaCheckDouble />
            Winkelpanden
          </m.div>
          <m.div
            className={stl.bannerItem}
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            <FaCheckDouble />
            Loodsen
          </m.div>
        </div>
        <div className={stl.verassenBlock}>
          <div>
            <m.h2
              className={stl.productenHero2}
              initial={{ opacity: 0, y: "-50%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.75, delay: 0.3 }}
            >
              Laat u verassen door de mogelijkheden
            </m.h2>
            <m.p
              className={stl.projectCopy2}
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.75, delay: 0.3 }}
            >
              Bent u opzoek naar een dienstverlener voor grotere oppervlaktes?
              <br /> Wij van Legservice Groen gaan graag in gesprek met u over
              de mogelijkheden. Of het gaat om het verwijderen van de huidige
              vloer, het plaatsen van een nieuwe vloer of egaliseren, geen
              uitdaging is te groot!
              <br />
              <br />
              Bent u opzoek naar een dienstverlener voor grotere oppervlaktes?
              <br /> Wij van Legservice Groen gaan graag in gesprek met u over
              de mogelijkheden. Of het gaat om het verwijderen van de huidige
              vloer, het plaatsen van een nieuwe vloer of egaliseren, geen
              uitdaging is te groot!
            </m.p>
          </div>
          <Lottie
            animationData={construction}
            className={stl.lottieAnimation}
          />
        </div>
        <div className={stl.uitdagingBanner}>
          <m.span
            className={stl.uitdagingSpan}
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            Geen uitdaging te groot!
          </m.span>
        </div>
        <div className={stl.finalBox}>
          <div>
            <m.h2
              className={stl.finalTitle}
              initial={{ opacity: 0, y: "-100%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.75, delay: 0.3 }}
            >
              Advies op maat
            </m.h2>
            <m.p
              className={stl.projectCopy3}
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.75, delay: 0.3 }}
            >
              Door samen in gesprek te gaan over de mogelijkheden, kunnen wij
              kijken hoe wij uw project het beste kunnen benaderen.
              <br />
              <br />
              Zit u met tijdnood, of andere specifieke problemen, dan denken wij
              graag met u mee. Wij hebben voor veel klanten een passende
              oplossing weten te realiseren. <br /> <br /> Door samen in gesprek
              te gaan over de mogelijkheden, kunnen wij kijken hoe wij uw
              project het beste kunnen benaderen.
              <br /> <br />
              Zit u met tijdnood, of andere specifieke problemen, dan denken wij
              graag met u mee. Wij hebben voor veel klanten een passende
              oplossing weten te realiseren.
            </m.p>
          </div>
          <m.img
            src="/Industrial.jpg"
            alt="Industrieel gebouw"
            className={stl.industrialSite}
            initial={{ opacity: 0, x: "10%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.75, delay: 0.3 }}
          />
        </div>
        <div className={stl.ctaBottomBox}>
          <Lottie animationData={connection} className={stl.lottieAnimation2} />
          <div className={stl.bottomRightBlock}>
            <m.span className={stl.bottomCtaSpan}>Let's get in touch</m.span>
            <m.button
              className={stl.bottomCta}
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              onClick={handleNavigation}
            >
              Today!
            </m.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projecten;
