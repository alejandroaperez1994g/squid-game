import "./Product.css";

const Product = ({ title, image, price, discount }) => {
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
      <div className="product__bottom">
        <div className="prices">
          <span className="prices__old">{price}</span>
          <span className="prices__discount">{discount}</span>
        </div>
        <span>|</span>
        <button className="prices__button">Shop Now</button>
      </div>
    </div>
  );
};

export default Product;
