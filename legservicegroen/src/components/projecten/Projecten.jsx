import stl from "./Projecten.module.css";
import { FaCheckDouble } from "react-icons/fa6";
import { motion as m } from "framer-motion";

const Projecten = () => {
  return (
    <div className={stl.projecten}>
      <div className={stl.topWrap}>
        <h1>Projecten</h1>
      </div>
      <div className={stl.mainContent}>
        <h2 className={stl.productenHero}>
          Ook het adres voor grote projecten
        </h2>
        <p className={stl.projectCopy1}>
          Bent u opzoek naar een dienstverlener voor grotere oppervlaktes?
          <br /> Wij van Legservice Groen gaan graag in gesprek met u over de
          mogelijkheden. Of het gaat om het verwijderen van de huidige vloer,
          het plaatsen van een nieuwe vloer of egaliseren, geen uitdaging is te
          groot!
        </p>
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
      </div>
    </div>
  );
};

export default Projecten;
