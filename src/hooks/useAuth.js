import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth, githubProvider, provider } from '../firebase';
import { CartContext } from '../contexts';
import useFirestore from './useFirestore';

const useAuth = () => {
  const navigator = useNavigate();

  const { notify } = useContext(CartContext);
  const { settingUpData } = useFirestore();

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
    settingUpData(user.user);
    navigator('/');
  };

  const errorHandler = (error) => {
    console.error(error.code);
    console.error(error.message);
    notify(`${error.message}`, 'error');
  };

  const handleSignUpWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUserInformation(result);
      })
      .catch((error) => {
        errorHandler(error);
      });
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
    handleSignUpWithGithub,
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
