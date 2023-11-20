import stl from "./Diensten.module.css";
import { FaArrowRight } from "react-icons/fa";

const Diensten = () => {
  return (
    <div className={stl.diensten}>
      <div className={stl.topFlex}>
        <h2 className={stl.heroTitle}>Uw vloerspecialist</h2>
        <div className={stl.blackshape}></div>
      </div>
      <p className={stl.copy}>
        Wij denken graag met u mee over een passende oplossing. Door onze jaren
        aan ervaring kunnen wij een breed scala aan parketten voorzien naar uw
        behoefte.
      </p>
      <div className={stl.specialGrid}>
        <div className={stl.gridModal1}>
          <div className={stl.innerContainer}>
            <h3>PVC</h3>
            <p className={stl.modalCopy}>
              Samengevat bieden PVC-vloeren een uitstekende combinatie van
              duurzaamheid, veelzijdigheid en esthetiek, waardoor ze een
              populaire keuze zijn voor wie op zoek is naar een eigentijdse en
              functionele vloerbedekking.
            </p>
          </div>
        </div>
        <div className={stl.gridModal2}>
          <div className={stl.innerContainer}>
            <h3>Visgraat</h3>
            <p className={stl.modalCopy}>
              Visgraatvloeren passen goed in zowel klassieke als moderne
              interieurs en voegen een gevoel van verfijning toe aan elke
              ruimte. Ze kunnen grotere ruimtes optisch verkleinen en kleinere
              ruimtes juist groter laten lijken, afhankelijk van de richting van
              het patroon.
            </p>
          </div>
        </div>
        <div className={stl.gridModal3}>
          <div className={stl.innerContainer}>
            <h3>Eik</h3>
            <p className={stl.modalCopy}>
              Eiken vloeren stralen een tijdloze schoonheid uit met hun
              natuurlijke nerfpatronen en warme tinten. Of het nu gaat om een
              modern loft of een klassiek landhuis, eiken vloeren voegen een
              vleugje elegantie toe aan elke ruimte.
            </p>
          </div>
        </div>
        <div className={stl.gridModal4}>
          <div className={stl.innerContainer}>
            <h3>Egaliseren</h3>
            <p className={stl.modalCopy}>
              Egaliseren legt de basis voor een perfecte vloerinstallatie. Het
              proces van vloeren egaliseren zorgt voor een glad oppervlak,
              waardoor oneffenheden worden geëlimineerd en de duurzaamheid van
              de vloer wordt vergroot.
            </p>
          </div>
        </div>
        <div className={stl.gridModal5}>
          <h3 className={stl.meer}>Meer</h3>
          <FaArrowRight className={stl.arrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Diensten;
