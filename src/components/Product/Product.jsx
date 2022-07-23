import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../contexts/CartContext";
import { WishContext } from "../../contexts/WishContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ACTIONS } from "../../reducers/wishReducer";

import "./Product.css";

const Product = ({ id, title, image, price, discount }) => {
  const [added, setAdded] = useState(false);
  const [addedAsFavorite, setAddedAsFavorite] = useState(false);
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  const { wishList, dispatch } = useContext(WishContext);

  const handleAddToCart = (e) => {
    setAdded(true);
    setShoppingCart([
      ...shoppingCart,
      { id: id, name: title, img: image, price: discount, amount: 1 },
    ]);
  };

  const toggleWishList = () => {
    if (addedAsFavorite) {
      dispatch({
        type: ACTIONS.REMOVE_WISH,
        payload: { id },
      });
    } else {
      dispatch({
        type: ACTIONS.ADD_WISH,
        payload: { id, title, image, discount },
      });
    }
  };

  useEffect(() => {
    const check = wishList.some((item) => {
      if (item.id === id) {
        return true;
      }
      return false;
    });
    check && setAddedAsFavorite(true);
    !check && setAddedAsFavorite(false);
  }, [wishList, id]);

  useEffect(() => {
    const check = shoppingCart.some((item) => {
      if (item.id === id) {
        return true;
      }
      return false;
    });
    check && setAdded(true);
    !check && setAdded(false);
  }, [shoppingCart, id]);

  return (
    <div className="product__wrapper">
      <div className="product__image">
        <button className="product__image_info" onClick={toggleWishList}>
          {addedAsFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </button>
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
