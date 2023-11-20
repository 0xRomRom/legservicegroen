import stl from "./Home.module.css";
import Header from "./header/Header";
import Diensten from "./diensten/Diensten";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.div
      className={stl.home}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      exit={{ opacity: 1 }}
    >
      <Header />
      <Diensten />
    </m.div>
  );
};

export default Home;
