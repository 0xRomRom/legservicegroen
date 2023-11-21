import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import PortfolioOverlay from "./components/home/portfoliooverlay/PortfolioOverlay";
import { useState } from "react";

function App() {
  const location = useLocation();
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
      <AnimatePresence>
        <Routes location={location}>
          <Route
            index
            path="/"
            element={<Home setFloorChoice={setFloorChoice} />}
            key={location.pathname}
          />

          <Route
            path="/portfolio"
            element={<Portfolio key={location.pathname} />}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
