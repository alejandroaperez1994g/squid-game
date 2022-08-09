import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import { UserContextProvider } from './contexts';

const Router = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Home />} />
          <Route path="/cancel" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default Router;
