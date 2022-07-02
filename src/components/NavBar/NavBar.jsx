import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <FontAwesomeIcon icon="fa-solid fa-bars-sort" />
      <FontAwesomeIcon icon={faBars} color="white" />

      <a className="navbar__item sharp_font " href="http:/">
        Contact
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        About Us
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        Blog
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        <img
          className="navbar__logo"
          src="https://www.pngmart.com/files/21/Squid-Game-Play-Card-Circle-Triangle-Sqaure-PNG.png"
          alt=""
        />
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        Home
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        Store
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        Series
      </a>
      <button className="navbar__loginButton">Login</button>
    </div>
  );
};

export default Navbar;
