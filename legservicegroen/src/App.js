import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import PortfolioOverlay from "./components/home/portfoliooverlay/PortfolioOverlay";
import Specialiteiten from "./components/specialiteiten/Specialiteiten";
import Projecten from "./components/projecten/Projecten";
import { useState } from "react";

function App() {
  const [floorChoice, setFloorChoice] = useState("");
  return (
    <div className="App">
      {floorChoice !== "" && (
        <PortfolioOverlay
          setFloorChoice={setFloorChoice}
          floorChoice={floorChoice}
        />
      )}

      <Navbar />
      <Routes>
        <Route
          index
          path="/"
          element={<Home setFloorChoice={setFloorChoice} />}
        />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/specialiteiten" element={<Specialiteiten />} />
        <Route path="/projecten" element={<Projecten />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
