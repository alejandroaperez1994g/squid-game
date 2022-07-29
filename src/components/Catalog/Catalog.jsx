import { useEffect, useState, useContext } from 'react';
import { fetchProducts } from '../../services/api';
import Product from '../Product/Product';
import { CartContext } from '../../contexts/CartContext';
import SkeletonProduct from '../SkeletonProduct/SkeletonProduct';

import './Catalog.css';

const Catalog = ({ dispatch }) => {
  const [catalog, setCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { notify } = useContext(CartContext);

  const handleRequest = async (retries) => {
    const response = await fetchProducts();

    if (response.length > 1) {
      setCatalog(response);
      setIsLoading(false);
    } else {
      if (retries > 0) {
        console.log(`retries ${retries}`);
        setTimeout(() => {
          handleRequest(retries - 1);
        }, 10000);
      } else {
        console.error(response.error.message);
        notify(`API Error: ${response.error.message}.`, 'error');
        notify(`API Error: please try again later.`, 'error');
      }
    }
  };

  useEffect(() => {
    handleRequest(5);
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
