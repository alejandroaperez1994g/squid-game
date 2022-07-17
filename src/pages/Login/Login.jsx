import { Input, Button } from "@nextui-org/react";

import "./Login.css";

const Login = () => {
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
