import "./BottomSection.css";

const BottomSection = () => {
  return (
    <div className="bottom__section_container">
      <div className="bottom__section_left">
        <img
          className="bottom__section_image"
          src={require("../../assets/img/logo.png")}
          alt=""
        />
        <h2 className="bottom__section_title sharp_font">
          Ready For The Next Game!
        </h2>
        <p className="bottom__section_text sharp_font">
          Stay tuned we are live soon. Very soon you will find us on Play Store.
        </p>
        <div className="bottom__section_wrapper">
          <input
            className="bottom__section_input sharp_font"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bottom__section_button sharp_font">Send</button>
        </div>
        <p className="extra sharp_font">
          * We will let you know when game is available on Play Store.{" "}
        </p>
      </div>
      <div className="bottom__section_right"></div>
    </div>
  );
};

export default BottomSection;
