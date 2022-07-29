import { Toaster } from 'react-hot-toast';
import { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './Home.css';

import {
  NavBar,
  MainSection,
  Features,
  Catalog,
  Series,
  BottomSection,
  Footer,
} from '../../components';

function Home() {
  const { setShoppingCart } = useContext(CartContext);
  const { pathname } = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    if (pathname === '/success') {
      setShoppingCart([]);
      navigator('/');
    } else {
      navigator('/');
    }
  }, [pathname]);

  return (
    <div className="Home">
      <NavBar />
      <MainSection />
      <Features />
      <Catalog />
      <Series />
      <BottomSection />
      <Footer />
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
}

export default Home;
