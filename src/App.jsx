import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import MainSection from "./components/MainSection/MainSection";
import Features from "./components/Features/Features";
import Catalog from "./components/Catalog/Catalog";
import Series from "./components/Series/Series";
import BottomSection from "./components/BottomSection/BottomSection";
import Footer from "./components/Footer/Footer";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <div className="App">
      <NavBar cart={shoppingCart} setCart={setShoppingCart} />
      <MainSection />
      <Features />
      <Catalog cart={shoppingCart} setCart={setShoppingCart} />
      <Series />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default App;
