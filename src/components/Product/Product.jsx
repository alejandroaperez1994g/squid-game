import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../contexts/CartContext";

import "./Product.css";

const Product = ({ id, title, image, price, discount }) => {
  const [added, setAdded] = useState(false);
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    setAdded(true);
    setShoppingCart([
      ...shoppingCart,
      { id: id, name: title, img: image, price: price, amount: 1 },
    ]);
  };

  useEffect(() => {
    shoppingCart.find((item) => item.id === id) && setAdded(true);
  }, [added, shoppingCart, id]);

  useEffect(() => {
    shoppingCart.find((item) => item.id !== id) && setAdded(false);
  }, [shoppingCart, id]);

  useEffect(() => {
    shoppingCart.length === 0 && setAdded(false);
  }, [shoppingCart]);

  return (
    <div className="product__wrapper">
      <div className="product__image">
        <button className="product__image_info sharp_font">Sale</button>
        <img
          className="product__image_pict"
          src={require(`../../assets/img/products/${image}`)}
          alt=""
        />
      </div>
      <p className="product__title sharp_font">{title}</p>
      {added ? (
        <div className="product__bottom">
          <p className="product__added sharp_font">Added to cart</p>
        </div>
      ) : (
        <div className="product__bottom">
          <div className="prices">
            <span className="prices__old sharp_font">€ {price}</span>
            <span className="prices__discount sharp_font">€{discount}</span>
          </div>
          <span className="span">|</span>
          <button
            onClick={handleAddToCart}
            className="prices__button sharp_font"
          >
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
};

Product.defaultProps = {
  title: "",
  image: "",
  price: 0,
  discount: 0,
};

export default Product;
