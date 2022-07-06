import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Product.css";

const Product = ({ id, title, image, price, discount, cart, setCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    setAdded(true);
    setCart([
      ...cart,
      { id: id, name: title, img: image, price: price, amount: 1 },
    ]);
  };

  useEffect(() => {
    cart.find((item) => item.id === id) && setAdded(true);
  }, [added, cart, id]);

  return (
    <div className="product__wrapper">
      <div className="product__image">
        <button className="product__image_info">Sale</button>
        <img
          className="product__image_pict"
          src={require(`../../assets/img/products/${image}`)}
          alt=""
        />
      </div>
      <p className="product__title">{title}</p>
      {added ? (
        <p className="product__added">Added to cart</p>
      ) : (
        <div className="product__bottom">
          <div className="prices">
            <span className="prices__old">€ {price}</span>
            <span className="prices__discount">€{discount}</span>
          </div>
          <span>|</span>
          <button onClick={handleAddToCart} className="prices__button">
            Shop Now
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
