import { useState, useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast from "react-hot-toast";
import { Success } from "./components";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

import { CartContext, UserContext, WishContext } from "./contexts";
import { wishReducer } from "./reducers/wishReducer";

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let user = JSON.parse(localStorage.getItem("userData")) || null;
let wishListStorage = JSON.parse(localStorage.getItem("wishList")) || [];

const Router = () => {
  const [shoppingCart, setShoppingCart] = useState(cart);
  const [userData, setUserData] = useState(user);
  const [wishList, dispatch] = useReducer(wishReducer, wishListStorage);

  const notify = (message, type = "success") => {
    if (type === "error") {
      toast.error(message);
      return;
    }
    toast.success(message);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart, notify }}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <WishContext.Provider value={{ wishList, dispatch }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Home />} />
            </Routes>
          </WishContext.Provider>
        </BrowserRouter>
      </UserContext.Provider>
    </CartContext.Provider>
  );
};

export default Router;
