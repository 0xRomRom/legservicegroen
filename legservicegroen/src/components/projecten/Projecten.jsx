import stl from "./Projecten.module.css";
import { FaCheckDouble } from "react-icons/fa6";
import { motion as m } from "framer-motion";
import Lottie from "lottie-react";
import construction from "../../assets/Construction.json";
import connection from "../../assets/Connection.json";

const Projecten = () => {
  return (
    <div className={stl.projecten}>
      <div className={stl.topWrap}>
        <h1>Projecten</h1>
      </div>
      <div className={stl.mainContent}>
        <div className={stl.heroWrap}>
          <h2 className={stl.productenHero}>
            Ook hét adres voor grote projecten
          </h2>
          <p className={stl.projectCopy1}>
            Bent u opzoek naar een dienstverlener voor grotere oppervlaktes?
            <br /> Wij van Legservice Groen gaan graag in gesprek met u over de
            mogelijkheden. Of het gaat om het verwijderen van de huidige vloer,
            het plaatsen van een nieuwe vloer of egaliseren, geen uitdaging is
            te groot!
          </p>
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
            <h2 className={stl.productenHero2}>
              Laat u verassen door de mogelijkheden
            </h2>
            <p className={stl.projectCopy2}>
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
            </p>
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
            <h2 className={stl.finalTitle}>Advies op maat</h2>
            <p className={stl.projectCopy3}>
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
            </p>
          </div>
          <img
            src="/Industrial.jpg"
            alt="Industrieel gebouw"
            className={stl.industrialSite}
          />
        </div>
        <div className={stl.ctaBottomBox}>
          <Lottie animationData={connection} className={stl.lottieAnimation2} />
          <div className={stl.bottomRightBlock}>
            <span className={stl.bottomCtaSpan}>Let's get in touch</span>
            <button className={stl.bottomCta}>Today!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projecten;
