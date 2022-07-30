import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import { CartContextProvider } from './contexts';

const Router = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Home />} />
          <Route path="/cancel" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default Router;
