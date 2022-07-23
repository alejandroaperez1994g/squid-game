import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Success } from "./components";

import Login from "./pages/Login/Login";
import { CartContext } from "./contexts/CartContext";
import { UserContext } from "./contexts/UserContext";
import Home from "./pages/Home/Home";

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let user = JSON.parse(localStorage.getItem("userData")) || null;

const Router = () => {
  const [shoppingCart, setShoppingCart] = useState(cart);
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </CartContext.Provider>
  );
};

export default Router;
