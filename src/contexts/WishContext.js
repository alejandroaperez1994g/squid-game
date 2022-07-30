import { createContext, useEffect, useReducer } from 'react';
import { wishReducer } from '../reducers/wishReducer';

export const WishContext = createContext();
let wishListStorage = JSON.parse(localStorage.getItem('wishList')) || [];

export const WishContextProvider = ({ children }) => {
  const [wishList, dispatch] = useReducer(wishReducer, wishListStorage);

  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
  }, [wishList]);

  return (
    <WishContext.Provider value={{ wishList, dispatch }}>
      {children}
    </WishContext.Provider>
  );
};
