import { useContext } from "react";
import { Input, Button } from "@nextui-org/react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import "./Login.css";

const Login = () => {
  const navigator = useNavigate();
  const { setUserData } = useContext(UserContext);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUserData({ name: displayName, email: email, photo: photoURL });
        navigator("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="login__container">
      <div className="login__container_section">
        <div className="left__section">
          <div className="left__section_wrapper">
            <div className="top__section">
              <img
                className="top__section_img"
                src={require("../../assets/img/guard.png")}
                alt="gaurd"
              />
              <h1 className="top__section_title">Welcome back</h1>
            </div>
            <p className="top__section_description">
              Welcome back! Please enter your details.
            </p>
            <form className="section__form" action="" method="post">
              <Input labelPlaceholder="Email" />
              <Input.Password labelPlaceholder="Password" />
              <p className="forgotPassword">Forgot password?</p>
              <Button color="secondary">Sign In</Button>
              <Button
                ghost
                icon={
                  <img
                    className="google_icon"
                    src={require("../../assets/img/google.png")}
                    alt="google"
                  />
                }
                css={{
                  background: "white",
                  color: "black",
                  border: "1px solid gray",
                }}
                onClick={handleSignIn}
              >
                Sign in with Google
              </Button>
            </form>
            <p className="signUp_text">Don't have an account? Sign up.</p>
          </div>
        </div>
        <div className="right_section "></div>
      </div>
    </div>
  );
};

export default Login;
