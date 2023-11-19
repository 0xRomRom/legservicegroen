import stl from "./Home.module.css";
import Header from "./header/Header";
const Home = () => {
  return (
    <div className={stl.home}>
      <Header />
    </div>
  );
};

export default Home;
