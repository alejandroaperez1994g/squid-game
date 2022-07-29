import { useEffect, useState } from 'react';
import { fetchProducts } from '../../helper/api';
import Product from '../Product/Product';

import SkeletonProduct from '../SkeletonProduct/SkeletonProduct';

import './Catalog.css';

const Catalog = ({ dispatch }) => {
  const [catalog, setCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetchProducts().then((result) => {
        setCatalog(result);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="catalog__container">
      <img
        className="catalog__title"
        src={require('../../assets/img/catalog-title.png')}
        alt="title"
      />
      <div className="catalog__products">
        {isLoading ? (
          <>
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
          </>
        ) : (
          catalog.map((item, index) => {
            return (
              <Product
                key={index}
                id={index}
                title={item.title}
                image={item.image}
                price={item.price}
                discount={item.discount}
                dispatch={dispatch}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Catalog;
