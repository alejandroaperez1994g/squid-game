import "./CartItem.css";

const CartItem = ({ name, price, img, amount }) => {
  return (
    <div className="item__container">
      <div>
        <img
          className="item__image"
          src={require(`../../assets/img/products/${img}`)}
          alt=""
        />
      </div>
      <div className="item__info">
        <p className="item__info_title info">{name}</p>
        <p className="item__info_price info">€{price}</p>
        <div className="item__bottom">
          <p className="item__bottom_input">{amount}</p>
          <button className="item__bottom_button">Remove</button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartItem;
