import "./FeatureItem.css";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureItem = ({ id, title, text, iconShape }) => {
  return (
    <div className="feature__item">
      <button className="feature__item_button">
        <FontAwesomeIcon icon={icons[iconShape]} />{" "}
      </button>
      <h3 className="feature__item_title">{title}</h3>
      <p className="feature__item_text">{text}</p>
    </div>
  );
};

export default FeatureItem;
