import stl from "./Home.module.css";
import Header from "./header/Header";
import Diensten from "./diensten/Diensten";
import Portfolio from "./portfolio/PortfolioSection";
import MarqueeBar from "./marqueebar/MarqueeBar";
import Klantwaardering from "./klantwaardering/Klantwaardering";
import CtaBox from "./ctabox/CtaBox";

import { motion as m } from "framer-motion";

const Home = ({ setFloorChoice }) => {
  return (
    <m.div className={stl.home}>
      <Header />
      <Diensten />
      <Portfolio setFloorChoice={setFloorChoice} />
      <MarqueeBar />
      <Klantwaardering />
      <CtaBox />
    </m.div>
  );
};

export default Home;
