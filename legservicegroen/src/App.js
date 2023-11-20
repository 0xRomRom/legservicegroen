import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence mode="popLayout">
        <Routes location={location}>
          <Route index path="/" element={<Home />} key={location.pathname} />

          <Route
            path="/portfolio"
            element={<Portfolio key={location.pathname} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
