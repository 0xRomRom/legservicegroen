import stl from "./Home.module.css";
import Header from "./header/Header";
import { motion as m } from "framer-motion";
const Home = () => {
  return (
    <div className={stl.home}>
      <Header />
    </div>
  );
};

export default Home;
