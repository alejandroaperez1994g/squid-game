import { createContext, useState, useEffect } from 'react';
import { UserContextProvider } from './UserContext';
import { WishContextProvider } from './WishContext';
import toast from 'react-hot-toast';

export const CartContext = createContext();
let cart = JSON.parse(localStorage.getItem('cart')) || [];

export const CartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState(cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const notify = (message, type = 'success') => {
    if (type === 'error') {
      toast.error(message);
      return;
    }
    toast.success(message);
  };

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart, notify }}>
      <UserContextProvider>
        <WishContextProvider>{children}</WishContextProvider>
      </UserContextProvider>
    </CartContext.Provider>
  );
};
