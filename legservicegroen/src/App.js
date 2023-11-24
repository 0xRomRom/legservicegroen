import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Specialiteiten from "./components/specialiteiten/Specialiteiten";
import { AnimatePresence } from "framer-motion";
import PortfolioOverlay from "./components/home/portfoliooverlay/PortfolioOverlay";
import { useState } from "react";

function App() {
  const [floorChoice, setFloorChoice] = useState("");
  return (
    <div className="App">
      <AnimatePresence>
        {floorChoice !== "" && (
          <PortfolioOverlay
            setFloorChoice={setFloorChoice}
            floorChoice={floorChoice}
          />
        )}
      </AnimatePresence>

      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route
            index
            path="/"
            element={<Home setFloorChoice={setFloorChoice} />}
          />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/specialiteiten" element={<Specialiteiten />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
