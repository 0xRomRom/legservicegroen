import stl from "./Home.module.css";
import Header from "./header/Header";
import Diensten from "./diensten/Diensten";
import Portfolio from "./portfolio/PortfolioSection";
import MarqueeBar from "./marqueebar/MarqueeBar";
import Klantwaardering from "./klantwaardering/Klantwaardering";
import CtaBox from "./ctabox/CtaBox";

import { motion as m } from "framer-motion";

const Home = ({ setFloorChoice, setActivePage }) => {
  return (
    <m.div className={stl.home}>
      <Header />
      <Diensten setActivePage={setActivePage} />
      <Portfolio
        setFloorChoice={setFloorChoice}
        setActivePage={setActivePage}
      />
      <MarqueeBar />
      <Klantwaardering setActivePage={setActivePage} />
      <CtaBox setActivePage={setActivePage} />
    </m.div>
  );
};

export default Home;
