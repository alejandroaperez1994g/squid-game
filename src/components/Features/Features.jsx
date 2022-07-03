import "./Features.css";
import FeatureItem from "../FeatureItem/FeatureItem";
import { info } from "../../assets/js/info";

const Features = () => {
  return (
    <div className="features__section">
      {info[0].features.map((feat, index) => {
        return (
          <FeatureItem
            key={index}
            title={feat.title}
            text={feat.text}
            iconShape={feat.icon}
          />
        );
      })}
    </div>
  );
};

export default Features;
