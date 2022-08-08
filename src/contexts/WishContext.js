import { createContext, useEffect, useReducer, useContext } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { wishReducer } from '../reducers/wishReducer';
import { UserContext } from './UserContext';

export const WishContext = createContext();
let wishListStorage = JSON.parse(localStorage.getItem('wishList')) || [];

export const WishContextProvider = ({ children }) => {
  const [wishList, dispatch] = useReducer(wishReducer, wishListStorage);
  const { userData } = useContext(UserContext);

  const uploadWishList = async (user, wishlist) => {
    try {
      const userDoc = doc(db, 'squid-store-users', user);
      const newField = { wishlist: wishlist };
      await updateDoc(userDoc, newField);
    } catch (error) {
      console.log(error);
    }
  };

  const checkUser = () => {
    if (userData) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
    if (checkUser()) {
      uploadWishList(userData.email, wishList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData?.email, wishList]);

  return (
    <WishContext.Provider value={{ wishList, dispatch }}>
      {children}
    </WishContext.Provider>
  );
};
