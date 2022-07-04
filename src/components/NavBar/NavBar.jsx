import "./NavBar.css";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItem from "../CartItem/CartItem";

import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = ({ cart, setCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTest = () => {
    setCart([...cart, 1]);
  };

  const Total = () => {
    return (
      <div className="total__wrapper">
        <p>Total</p>
        <p>$45</p>
      </div>
    );
  };

  return (
    <div className="navbar__container">
      <button className="navbar__loginButton">Login</button>

      <a className="navbar__item sharp_font " href="http:/">
        Contact
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        About Us
      </a>
      <a className="navbar__item sharp_font" href="http:/">
        Blog
      </a>
      <a className="navbar__item sharp_font" href="http:/">
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
          <StyledBadge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon style={{ color: "white" }} />
          </StyledBadge>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Shooping Cart</MenuItem>
          {cart.map((item, index) => {
            return (
              <MenuItem key={index}>
                <CartItem
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  amount={item.amount}
                />
              </MenuItem>
            );
          })}
          <Total />
          <button>Checkout</button>{" "}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
