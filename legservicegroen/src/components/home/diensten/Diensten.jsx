import stl from "./Diensten.module.css";
import { FaArrowRight } from "react-icons/fa";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Diensten = ({ setActivePage }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/specialiteiten");
    setActivePage("specialiteiten");
  };

  return (
    <div className={stl.diensten}>
      <m.div
        className={stl.topFlex}
        initial={{ opacity: 0, x: "-30px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 0.75 }}
      >
        <h2 className={stl.heroTitle}>Uw vloerspecialist</h2>
        <div className={stl.blackshape}></div>
      </m.div>
      <m.p
        className={stl.copy}
        initial={{ opacity: 0, x: "-30px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 0.85 }}
      >
        Wij denken graag met u mee over een passende oplossing. Door onze jaren
        aan ervaring kunnen wij een breed scala aan parketten voorzien naar uw
        behoefte.
      </m.p>
      <div className={stl.specialGrid}>
        <m.div
          className={stl.gridModal1}
          initial={{ opacity: 0, y: "-30px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.75 }}
        >
          <div className={stl.innerContainer}>
            <h3>Laminaat</h3>
            <p className={stl.modalCopy}>
              Samengevat bieden PVC-vloeren een uitstekende combinatie van
              duurzaamheid, veelzijdigheid en esthetiek, waardoor ze een
              populaire keuze zijn voor wie op zoek is naar een eigentijdse en
              functionele vloerbedekking.
            </p>
          </div>
        </m.div>
        <m.div
          className={stl.gridModal2}
          initial={{ opacity: 0, y: "-60px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.85 }}
        >
          <div className={stl.innerContainer}>
            <h3>PVC</h3>
            <p className={stl.modalCopy}>
              Visgraatvloeren passen goed in zowel klassieke als moderne
              interieurs en voegen een gevoel van verfijning toe aan elke
              ruimte. Ze kunnen grotere ruimtes optisch verkleinen en kleinere
              ruimtes juist groter laten lijken, afhankelijk van de richting van
              het patroon.
            </p>
          </div>
        </m.div>
        <m.div
          className={stl.gridModal3}
          initial={{ opacity: 0, y: "-70px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.95 }}
        >
          <div className={stl.innerContainer}>
            <h3>Tapijt</h3>
            <p className={stl.modalCopy}>
              Eiken vloeren stralen een tijdloze schoonheid uit met hun
              natuurlijke nerfpatronen en warme tinten. Of het nu gaat om een
              modern loft of een klassiek landhuis, eiken vloeren voegen een
              vleugje elegantie toe aan elke ruimte.
            </p>
          </div>
        </m.div>
        <m.div
          className={stl.gridModal4}
          initial={{ opacity: 0, y: "-80px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1.05 }}
        >
          <div className={stl.innerContainer}>
            <h3>Egaliseren</h3>
            <p className={stl.modalCopy}>
              Egaliseren legt de basis voor een perfecte vloerinstallatie. Het
              proces van vloeren egaliseren zorgt voor een glad oppervlak,
              waardoor oneffenheden worden geëlimineerd en de duurzaamheid van
              de vloer wordt vergroot.
            </p>
          </div>
        </m.div>
        <m.div
          className={stl.gridModal5}
          initial={{ opacity: 0, y: "-90px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1.15 }}
          onClick={handleNavigation}
        >
          <h3 className={stl.meer}>Meer</h3>
          <FaArrowRight className={stl.arrowRight} />
        </m.div>
      </div>
    </div>
  );
};

export default Diensten;
