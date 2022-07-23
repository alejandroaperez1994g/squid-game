import { memo } from "react";
import FeatureItem from "../FeatureItem/FeatureItem";
import { info } from "../../assets/js/info";
import "./Features.css";

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

export default memo(Features);
