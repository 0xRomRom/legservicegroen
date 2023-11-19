import stl from "./Navbar.module.css";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className={stl.navbar}>
      <img src={logo} alt="Legservice groen" className={stl.navlogo} />
    </div>
  );
};

export default Navbar;
