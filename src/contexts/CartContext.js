import { createContext, useState, useEffect, useContext } from 'react';

import toast from 'react-hot-toast';
import { UserContext } from './UserContext';
import { db } from '../firebase';
import { updateDoc, doc } from 'firebase/firestore';

export const CartContext = createContext();
let cart = JSON.parse(localStorage.getItem('cart')) || [];

export const CartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState(cart);
  const { userData } = useContext(UserContext);

  const uploadShoppingCart = async (user, shoppingCart) => {
    try {
      const userDoc = doc(db, 'squid-store-users', user);
      const newField = { shopping_cart: shoppingCart };
      await updateDoc(userDoc, newField);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
    if (userData) {
      uploadShoppingCart(userData.email, shoppingCart);
    }
  }, [shoppingCart, userData]);

  const notify = (message, type = 'success') => {
    if (type === 'error') {
      toast.error(message);
      return;
    }
    toast.success(message);
  };

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart, notify }}>
      {children}
    </CartContext.Provider>
  );
};
