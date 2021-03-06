import "./Catalog.css";
import Product from "../Product/Product";
import { info } from "../../assets/js/info";

const Catalog = () => {
  return (
    <div className="catalog__container">
      <img
        className="catalog__title"
        src={require("../../assets/img/catalog-title.png")}
        alt="title"
      />
      <div className="catalog__products">
        {/* <Product /> */}
        {info[0].catalog.map((item, index) => {
          return (
            <Product
              key={index}
              title={item.title}
              image={item.image}
              price={item.price}
              discount={item.discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
