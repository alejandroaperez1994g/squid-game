import "./FeatureItem.css";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

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

FeatureItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconShape: PropTypes.string.isRequired,
};

FeatureItem.defaultProps = {
  id: 0,
  title: "",
  text: "",
  iconShape: "",
};

export default FeatureItem;
