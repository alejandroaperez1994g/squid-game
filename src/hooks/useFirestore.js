import { db } from '../firebase';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext, UserContext, WishContext } from '../contexts';
import { ACTIONS } from '../reducers/wishReducer';

const useFirestore = () => {
  const { setShoppingCart } = useContext(CartContext);
  const { setUserData } = useContext(UserContext);
  const { dispatch } = useContext(WishContext);

  const userCollectionRef = collection(db, 'squid-store-users');

  const checkIfUserExist = async (email) => {
    const data = await getDocs(userCollectionRef);
    const userExist = data.docs.find((doc) => doc.id === email);
    return userExist ? true : false;
  };

  const createUser = async (user) => {
    const userDoc = doc(userCollectionRef, user.email);
    await setDoc(userDoc, {
      shopping_cart: [],
      shopping_history: [],
      wishlist: [],
      user_data: {
        email: user.email,
        name: user.displayName || '',
        img_url: user.photoURL || '',
      },
    });
  };

  const uploadWishList = async (user, wishlist) => {
    try {
      const userDoc = doc(db, 'squid-store-users', user);
      const newField = { wishlist: wishlist };
      await updateDoc(userDoc, newField);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async (user) => {
    const userDoc = doc(userCollectionRef, user.email);
    const data = await getDoc(userDoc);
    return data.data();
  };

  const initializeUserSession = async (user) => {
    const userData = await getUserData(user);
    setUserData({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    });
    setShoppingCart(userData.shopping_cart);
    dispatch({ type: ACTIONS.SET_WISH_LIST, payload: userData.wishlist });
    console.log('ejecutado el dispatch');
  };

  const settingUpData = async (user) => {
    console.log(user);
    if (await checkIfUserExist(user.email)) {
      initializeUserSession(user);
    } else {
      await createUser(user);
      initializeUserSession(user);
    }
  };

  return {
    settingUpData,
    uploadWishList,
  };
};

export default useFirestore;
