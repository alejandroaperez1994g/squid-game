import { useEffect, useState, useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Loading } from '@nextui-org/react';
import { useNavigate, Link } from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { ShoppingCartTable } from '../index';
import { getStripeCheckout } from '../../services/api';

import Menu from '@mui/material/Menu';
import './NavBar.css';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [total, setTotal] = useState(0);
  const { shoppingCart, notify } = useContext(CartContext);
  const { userData } = useContext(UserContext);
  const navigator = useNavigate();

  const [enableCheckout, setEnableCheckout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    shoppingCart.length === 0
      ? setEnableCheckout(true)
      : setEnableCheckout(false);
  }, [shoppingCart]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    let total = 0;
    shoppingCart.map((item) => {
      return (total += item.amount * item.price);
    });
    setTotal(total);
  }, [shoppingCart]);

  const handleCheckout = async () => {
    if (!userData) {
      notify('You must be authenticated to checkout.', 'error');
      notify('You will be redirected to Login.', 'error');
      setTimeout(() => {
        navigator('/login');
      }, 4000);
      return;
    }

    setIsLoading(true);
    const stripeResponse = await getStripeCheckout(shoppingCart);
    if (stripeResponse.url) {
      setIsLoading(false);
      window.location = stripeResponse.url;
    } else {
      setIsLoading(false);
      notify(`Stripe Error: ${stripeResponse.error}.`, 'error');
      notify(`Stripe Error: please try again later.`, 'error');
    }
  };

  const Total = () => {
    return (
      <div className="total__wrapper">
        <p className="sharp_font">Total</p>
        <p className="sharp_font">€{total}</p>
        <Button
          className="sharp_font"
          color="secondary"
          shadow
          onClick={handleCheckout}
          disabled={enableCheckout || isLoading}
        >
          {isLoading ? <Loading type="points" color="white" /> : 'Checkout'}
        </Button>
      </div>
    );
  };

  return (
    <div className="navbar__container">
      {userData ? (
        <DropdownMenu email={userData.email} photo={userData?.photo} />
      ) : (
        <button className="navbar__loginButton">
          <Link to={'/login'}> Login </Link>
        </button>
      )}

      <a className="navbar__item sharp_font " href="http:/">
        Contact
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        About Us
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        Blog
      </a>
      <a className="navbar__item sharp_font navbar__item_img" href="http:/">
        <img
          className="navbar__logo"
          src="https://www.pngmart.com/files/21/Squid-Game-Play-Card-Circle-Triangle-Sqaure-PNG.png"
          alt=""
        />
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        Home
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        Store
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        Series
      </a>
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <StyledBadge badgeContent={shoppingCart.length} color="primary">
            <ShoppingCartIcon style={{ color: 'white' }} />
          </StyledBadge>
        </IconButton>
        <Menu
          className="navbar__cart"
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <img
            className="cart__logo"
            src={require('../../assets/img/shopping.png')}
            alt="shooping cart"
          />
          {shoppingCart.length > 0 ? (
            <ShoppingCartTable />
          ) : (
            <h1 className="sharp_font">The Shopping Cart is Empty</h1>
          )}
          <Total />
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
