import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth, provider } from '../firebase';
import { UserContext, CartContext } from '../contexts';

const useAuth = () => {
  const navigator = useNavigate();
  const { setUserData } = useContext(UserContext);
  const { notify } = useContext(CartContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');

  const resetSignInForm = () => {
    setPassword('');
    setEmail('');
  };
  const resetSignUpForm = () => {
    resetSignInForm();
    setRepPassword('');
  };

  const setUserInformation = (user) => {
    const { displayName, email, photoURL } = user.user;
    setUserData({ name: displayName, email: email, photo: photoURL });
    navigator('/');
  };

  const errorHandler = (error) => {
    console.error(error.code);
    console.error(error.message);
    notify(`${error.message}`, 'error');
  };

  const handleSignUpWithEmailAndPassword = () => {
    if (password !== repPassword) {
      notify('Passwords do not match', 'error');
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUserInformation(result);
        })
        .catch((error) => {
          resetSignUpForm();
          errorHandler(error);
        });
    }
  };

  const handleSignInWithPopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserInformation(result);
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  const handleSignInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUserInformation(result);
      })
      .catch((error) => {
        errorHandler(error);
        resetSignInForm();
      });
  };
  return {
    handleSignInWithEmail,
    handleSignInWithPopup,
    handleSignUpWithEmailAndPassword,
    resetSignInForm,
    email,
    setEmail,
    password,
    setPassword,
    repPassword,
    setRepPassword,
    resetSignUpForm,
  };
};

export default useAuth;
