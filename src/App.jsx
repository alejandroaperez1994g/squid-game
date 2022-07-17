import "./App.css";
import { useContext } from "react";
import { CartContext } from "./components/contexts/CartContext";
import {
  NavBar,
  MainSection,
  Features,
  Catalog,
  Series,
  BottomSection,
  Footer,
} from "./components";

function App() {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

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
