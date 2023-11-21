import stl from "./PortfolioOverlay.module.css";
import Floor1 from "../../../assets/Floor1.jpg";
import { CgClose } from "react-icons/cg";

const PortfolioOverlay = ({ setFloorChoice }) => {
  const handleModalClose = () => {
    setFloorChoice("");
  };

  return (
    <div className={stl.overlay}>
      <div className={stl.innerWrap}>
        <div className={stl.topDiv}>
          <div className={stl.closeWrap}>
            <CgClose className={stl.close} onClick={handleModalClose} />
          </div>
          <img src={Floor1} alt="Floor" className={stl.floorImg} />
          <h2 className={stl.floorTitle}>PVC</h2>
        </div>
        <div>
          <p className={stl.story}>
            Bob, de eigenaar van Legservice Groen, coördineerde de installatie
            en communiceerde duidelijk met de familie over het proces. Het team
            begon met het verplaatsen van meubels en het voorbereiden van de
            ruimte voor de vloerinstallatie. De installatie zelf verliep vlot,
            met de focus op nauwkeurigheid en vakmanschap.
            <br />
            <br /> Tijdens de installatie werden eventuele vragen van de familie
            De Boer snel beantwoord, en het team zorgde ervoor dat ze op de
            hoogte bleven van de voortgang. Er werd extra aandacht besteed aan
            de afwerking, met oog voor detail om een hoogwaardig eindresultaat
            te garanderen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverlay;
