import stl from "./Navbar.module.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("home");

  const tabSwitcher = (newTab) => {
    setActivePage(newTab);
  };

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <nav className={stl.navbar}>
      <img
        src={logo}
        alt="Legservice groen"
        className={stl.navlogo}
        onClick={handleNavigation}
      />
      <ul className={stl.navlist}>
        <Link to="/" className={stl.links} onClick={() => tabSwitcher("home")}>
          <li
            className={`${stl.link} ${activePage === "home" ? stl.active : ""}`}
          >
            Home
          </li>
        </Link>

        <Link
          to="/portfolio"
          className={stl.links}
          onClick={() => tabSwitcher("portfolio")}
        >
          <li
            className={`${stl.link} ${
              activePage === "portfolio" ? stl.active : ""
            }`}
          >
            Portfolio
          </li>
        </Link>

        <Link
          to="/specialiteiten"
          className={stl.links}
          onClick={() => tabSwitcher("specialiteiten")}
        >
          <li
            className={`${stl.link} ${
              activePage === "specialiteiten" ? stl.active : ""
            }`}
          >
            Specialiteiten
          </li>
        </Link>

        <Link
          to="/projecten"
          className={stl.links}
          onClick={() => tabSwitcher("projecten")}
        >
          <li
            className={`${stl.link} ${
              activePage === "projecten" ? stl.active : ""
            }`}
          >
            Projecten
          </li>
        </Link>

        <Link
          to="/prijsopgave"
          className={stl.links}
          onClick={() => tabSwitcher("prijsopgave")}
        >
          <li
            className={`${stl.link} ${
              activePage === "prijsopgave" ? stl.active : ""
            }`}
          >
            Prijsopgave
          </li>
        </Link>

        <Link
          to="/reviews"
          className={stl.links}
          onClick={() => tabSwitcher("reviews")}
        >
          <li
            className={`${stl.link} ${
              activePage === "reviews" ? stl.active : ""
            }`}
          >
            Reviews
          </li>
        </Link>

        <Link
          to="/contact"
          className={stl.links}
          onClick={() => tabSwitcher("contact")}
        >
          <li
            className={`${stl.link} ${
              activePage === "contact" ? stl.active : ""
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
