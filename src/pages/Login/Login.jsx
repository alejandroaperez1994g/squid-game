import { Toaster } from 'react-hot-toast';
import { Button } from '@nextui-org/react';

import { useToggle, useAuth } from '../../hooks';
import { SignInForm, SignUpForm } from '../../components';
import './Login.css';

const Login = () => {
  const siRegistering = useToggle();
  const { handleSignInWithPopup } = useAuth();

  return (
    <div className="login__container">
      <div className="login__container_section">
        <div className="left__section">
          <div className="left__section_wrapper">
            <div className="top__section">
              <img
                className="top__section_img"
                src={require('../../assets/img/guard.png')}
                alt="gaurd"
              />
              <h1 className="top__section_title">Welcome back</h1>
            </div>
            <p className="top__section_description">
              Welcome back! Please enter your details.
            </p>
            {siRegistering.state ? <SignUpForm /> : <SignInForm />}
            <Button
              ghost
              icon={
                <img
                  className="google_icon"
                  src={require('../../assets/img/google.png')}
                  alt="google"
                />
              }
              css={{
                width: '100%',
                background: 'white',
                color: 'black',
                border: '1px solid gray',
              }}
              onClick={handleSignInWithPopup}
            >
              Sign in with Google
            </Button>
            <p className="signUp_text">
              Don't have an account?
              <Button
                light
                color="secondary"
                auto
                size="md"
                onClick={siRegistering.onToggle}
              >
                {siRegistering.state ? 'Sign in' : 'Sign up'}
              </Button>
            </p>
          </div>
        </div>
        <div className="right_section "></div>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default Login;
