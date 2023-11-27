import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import PortfolioOverlay from "./components/home/portfoliooverlay/PortfolioOverlay";
import Specialiteiten from "./components/specialiteiten/Specialiteiten";
import Projecten from "./components/projecten/Projecten";
import Prijsopgave from "./components/prijsopgave/Prijsopgave";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import { useState } from "react";

function App() {
  const [floorChoice, setFloorChoice] = useState("");
  const navbarLocation =
    localStorage.getItem("navbarLocation") || "defaultStyle";
  const [activePage, setActivePage] = useState(navbarLocation);

  return (
    <div className="App">
      {floorChoice !== "" && (
        <PortfolioOverlay
          setFloorChoice={setFloorChoice}
          floorChoice={floorChoice}
        />
      )}

      <Navbar setActivePage={setActivePage} activePage={activePage} />
      <Routes>
        <Route
          index
          path="/"
          element={<Home setFloorChoice={setFloorChoice} />}
        />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/specialiteiten" element={<Specialiteiten />} />
        <Route path="/projecten" element={<Projecten />} />
        <Route path="/prijsopgave" element={<Prijsopgave />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
