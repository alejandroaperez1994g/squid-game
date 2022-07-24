import { motion } from "framer-motion";
import "./MainSection.css";

const MainSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "linear",
        type: "tween",
      }}
      className="main__section"
    >
      <div className="main__section_container">
        <img
          className="main__section_top_img main__section_top_img_1"
          src={require("../../assets/img/masks.png")}
          alt="mask"
        />

        <div className="main__section_top_text sharp_font">
          <p>All The Squid Game Products You Will Find Here</p>
          <hr />
        </div>
      </div>

      <div className="main__section_container main__section_container_right">
        <img
          className="main__section_top_img main__section_top_img_4"
          src={require("../../assets/img/masks.png")}
          alt="mask"
        />
        <img
          className="main__section_top_img main__section_top_img_2"
          src={require("../../assets/img/the boss.png")}
          alt="mask"
        />
        <img
          className="main__section_top_img main__section_top_img_3"
          src={require("../../assets/img/guards.png")}
          alt="mask"
        />
      </div>
    </motion.div>
  );
};

export default MainSection;
