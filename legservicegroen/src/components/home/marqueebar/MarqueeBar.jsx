import stl from "./MarqueeBar.module.css";
import { IoCheckmarkDone } from "react-icons/io5";
import img1 from "../../../assets/marquee/1.webp";
import img2 from "../../../assets/marquee/2.webp";
import img3 from "../../../assets/marquee/3.webp";
import img4 from "../../../assets/marquee/4.webp";
import img5 from "../../../assets/marquee/5.webp";
import img6 from "../../../assets/marquee/6.webp";
import img7 from "../../../assets/marquee/7.webp";
import img8 from "../../../assets/marquee/8.gif";
import img9 from "../../../assets/marquee/9.webp";
import img10 from "../../../assets/marquee/10.webp";
import img11 from "../../../assets/marquee/11.webp";
import img12 from "../../../assets/marquee/12.webp";
import img13 from "../../../assets/marquee/13.webp";
import img14 from "../../../assets/marquee/14.webp";
import img15 from "../../../assets/marquee/15.webp";
import img16 from "../../../assets/marquee/16.webp";
import img17 from "../../../assets/marquee/17.webp";
import img18 from "../../../assets/marquee/18.webp";
import img19 from "../../../assets/marquee/19.webp";
import img20 from "../../../assets/marquee/20.webp";

import { motion as m } from "framer-motion";

const MarqueeBar = () => {
  return (
    <div className={stl.marqueeBar}>
      <m.div
        className={stl.heroRow}
        initial={{ opacity: 0, x: "-50px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 2 }}
      >
        <h2 className={stl.besteMerken}>Topmerken, vakkundig gelegd </h2>
        <IoCheckmarkDone className={stl.checkmark} />
      </m.div>
      <div className={stl.marqueeWrap}>
        <div className={stl.marqueeRow}>
          <div className={stl.marqueeItem}>
            <img src={img1} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img2} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img3} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img4} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img5} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img6} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img7} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img8} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
        </div>
        <div className={stl.marqueeRow}>
          <div className={stl.marqueeItem}>
            <img src={img1} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img2} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img3} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img4} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img5} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img6} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img7} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
          <div className={stl.marqueeItem}>
            <img src={img8} className={stl.marqueeImg} alt="Vloer merk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBar;
