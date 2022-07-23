import { memo } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./FeatureItem.css";

const FeatureItem = ({ id, title, text, iconShape }) => {
  return (
    <div className="feature__item">
      <button className="feature__item_button">
        <FontAwesomeIcon icon={icons[iconShape]} />
      </button>
      <h3 className="feature__item_title sharp_font">{title}</h3>
      <p className="feature__item_text sharp_font">{text}</p>
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

export default memo(FeatureItem);
