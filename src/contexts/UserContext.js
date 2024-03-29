import { createContext, useEffect, useState } from 'react';
import { CartContextProvider } from '.';
import { WishContextProvider } from '.';

export const UserContext = createContext();
let user = JSON.parse(localStorage.getItem('userData')) || null;

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <CartContextProvider>
        <WishContextProvider>{children}</WishContextProvider>
      </CartContextProvider>
    </UserContext.Provider>
  );
};
