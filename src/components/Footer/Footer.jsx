import "./Footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer__section">
      <p className="footer__section_text link" href="/">
        Privacy Policy
      </p>
      <p className="footer__section_text link" href="/">
        Term of Service
      </p>
      <p className="footer__section_text link" href="/">
        Language
      </p>
      <p className="footer__section_text">2022 Alejandro</p>
      <a
        href="https://github.com/alejandroaperez1994g"
        target="_blank"
        rel="noreferrer"
      >
        <button className="footer__section_button">
          <BsGithub />
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/alejandro-avila-perez-47268017a/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="footer__section_button">
          <BsLinkedin />
        </button>
      </a>
      <a
        href="mailto:alejandroapere1994g@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <button className="footer__section_button">
          <SiGmail />
        </button>
      </a>
    </div>
  );
};

export default Footer;
