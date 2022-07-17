import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Success } from "./components";
import App from "./App";

const Router = () => {
  return (
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
  );
};

export default Router;
