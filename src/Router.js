import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Success } from "./components";
import App from "./App";
import Login from "./pages/Login/Login";
import { CartContext } from "./components/contexts/CartContext";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const Router = () => {
  const [shoppingCart, setShoppingCart] = useState(cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<App />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default Router;
