import { useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Input, Button } from '@nextui-org/react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import './Login.css';

const Login = () => {
  const navigator = useNavigate();
  const { setUserData } = useContext(UserContext);
  const { notify } = useContext(CartContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setPassword('');
    setEmail('');
  };

  const handleSignInWithPopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUserData({ name: displayName, email: email, photo: photoURL });
        navigator('/');
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        notify(`${error.message}`, 'error');
      });
  };

  const handleSignInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUserData({ name: displayName, email: email, photo: photoURL });
        navigator('/');
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        resetForm();
        notify(`${error.message}`, 'error');
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
                src={require('../../assets/img/guard.png')}
                alt="gaurd"
              />
              <h1 className="top__section_title">Welcome back</h1>
            </div>
            <p className="top__section_description">
              Welcome back! Please enter your details.
            </p>
            <form className="section__form" action="" method="">
              <Input
                labelPlaceholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input.Password
                labelPlaceholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="forgotPassword">Forgot password?</p>
              <Button color="secondary" onClick={handleSignInWithEmail}>
                Sign In
              </Button>
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
                  background: 'white',
                  color: 'black',
                  border: '1px solid gray',
                }}
                onClick={handleSignInWithPopup}
              >
                Sign in with Google
              </Button>
            </form>
            <p className="signUp_text">Don't have an account? Sign up.</p>
          </div>
        </div>
        <div className="right_section "></div>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default Login;
