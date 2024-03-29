import { Toaster } from 'react-hot-toast';
import { Button, Text } from '@nextui-org/react';

import { useToggle, useAuth } from '../../hooks';
import { SignInForm, SignUpForm, SignInButton } from '../../components';
import GoogleLogo from '../../assets/img/google.png';
import GitHubLogo from '../../assets/img/github-logo.png';
import './Login.css';

const Login = () => {
  const siRegistering = useToggle();
  const { handleSignInWithPopup, handleSignUpWithGithub } = useAuth();

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
            <Text
              weight="extrabold"
              css={{ textAlign: 'center', width: '100%' }}
            >
              -- Or Sign In with --
            </Text>
            <div className="buttons__container">
              <SignInButton
                text={'GitHub'}
                action={handleSignUpWithGithub}
                icon={GitHubLogo}
              />
              <SignInButton
                text={'Google'}
                action={handleSignInWithPopup}
                icon={GoogleLogo}
              />
            </div>

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
