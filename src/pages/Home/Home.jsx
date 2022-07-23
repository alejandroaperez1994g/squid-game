import "./Home.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import {
  NavBar,
  MainSection,
  Features,
  Catalog,
  Series,
  BottomSection,
  Footer,
} from "../../components";

function Home() {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

  return (
    <div className="Home">
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

export default Home;
