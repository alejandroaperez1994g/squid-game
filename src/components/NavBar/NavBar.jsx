import { useEffect, useState, useContext } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Table, Button, User, Loading } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";

import Menu from "@mui/material/Menu";
import "./NavBar.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [total, setTotal] = useState(0);
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

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

  const handleAddAmount = (id) => {
    shoppingCart.forEach((item) => {
      if (item.id === id) {
        item.amount = item.amount + 1;
      }
    });
    setShoppingCart([...shoppingCart]);
  };
  const handleRestAmount = (id) => {
    shoppingCart.forEach((item) => {
      if (item.id === id && item.amount > 1) {
        item.amount = item.amount - 1;
      }
    });
    setShoppingCart([...shoppingCart]);
  };

  const handleRemove = (id) => {
    let newArray = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(newArray);
  };

  const handleCheckout = () => {
    const items = shoppingCart.map((item) => {
      return item;
    });
    setIsLoading(true);
    fetch(process.env.REACT_APP_STRIPE_SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        setIsLoading(false);
        window.location = url;
        setShoppingCart([]);
      })
      .catch((e) => {
        console.error(e);
      });
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
          disabled={enableCheckout}
        >
          {isLoading ? <Loading type="points" color="white" /> : "Checkout"}
        </Button>
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
            <ShoppingCartIcon style={{ color: "white" }} />
          </StyledBadge>
        </IconButton>
        <Menu
          className="navbar__cart"
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
          <img
            className="cart__logo"
            src={require("../../assets/img/shopping.png")}
            alt="shooping cart"
          />
          {shoppingCart.length > 0 ? (
            <Table
              className="cart__table"
              aria-label="Example static collection table"
              css={{
                height: "auto",
                minWidth: "auto",
              }}
              bordered
            >
              <Table.Header>
                <Table.Column>PRODUCT</Table.Column>
                <Table.Column>PRICE</Table.Column>
                <Table.Column>AMOUNT</Table.Column>
                <Table.Column></Table.Column>
                <Table.Column></Table.Column>
                <Table.Column></Table.Column>
              </Table.Header>
              <Table.Body>
                {shoppingCart.map((item, index) => {
                  return (
                    <Table.Row key={index} css={{}}>
                      <Table.Cell>
                        <User
                          squared
                          src={require(`../../assets/img/products/${item.img}`)}
                          css={{ p: 0, height: "max-content" }}
                          name={item.name}
                          size="xl"
                        ></User>
                      </Table.Cell>
                      <Table.Cell css={{ textAlign: "center" }}>
                        € {item.price}
                      </Table.Cell>
                      <Table.Cell css={{ textAlign: "center" }}>
                        {item.amount}
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          auto
                          ghost
                          onClick={() => handleAddAmount(item.id)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </Button>
                      </Table.Cell>
                      <Table.Cell css={{ textAlign: "center" }}>
                        <Button
                          auto
                          ghost
                          onClick={() => handleRestAmount(item.id)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </Button>
                      </Table.Cell>
                      <Table.Cell css={{ textAlign: "center" }}>
                        <Button
                          auto
                          ghost
                          color="error"
                          onClick={() => handleRemove(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
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
