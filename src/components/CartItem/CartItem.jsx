import "./CartItem.css";

const CartItem = ({ id, name, price, img, amount, cart, setCart }) => {
  const handleRemove = () => {
    let newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);
  };

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
          <button className="item__bottom_button" onClick={handleRemove}>
            Remove
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartItem;
