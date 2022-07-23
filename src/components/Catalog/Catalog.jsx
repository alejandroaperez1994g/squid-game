import { useEffect, useState } from "react";
import { fetchProducts } from "../../helper/api";
import Product from "../Product/Product";

import "./Catalog.css";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    try {
      fetchProducts().then((result) => {
        setCatalog(result);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="catalog__container">
      <img
        className="catalog__title"
        src={require("../../assets/img/catalog-title.png")}
        alt="title"
      />
      <div className="catalog__products">
        {catalog.map((item, index) => {
          return (
            <Product
              key={index}
              id={index}
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
