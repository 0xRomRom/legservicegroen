import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
