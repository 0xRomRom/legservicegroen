import stl from "./Header.module.css";
import Floor1 from "../../../assets/Floor1.jpg";
import Blanklogo from "../../../assets/Blanklogo.png";

const Header = () => {
  return (
    <header className={stl.header}>
      <div className={stl.leftblock}>
        <h1>Legservice</h1>
        <div className={stl.flexdiv}>
          <h2>Groen</h2>
          <div className={stl.blackshape}></div>
          <img
            src={Blanklogo}
            alt="Legservice groen"
            className={stl.blanklogo}
          />
        </div>
      </div>
      <div className={stl.rightblock}>
        <img src={Floor1} alt="Floor" />
      </div>
    </header>
  );
};

export default Header;
