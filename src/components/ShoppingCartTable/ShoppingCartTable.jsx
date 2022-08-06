import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { WishContext } from '../../contexts/WishContext';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Table, Button, User } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import './ShoppingCartTable.css';
import { ACTIONS } from '../../reducers/wishReducer';

const ShoppingCartTable = ({ wish }) => {
  const { shoppingCart, setShoppingCart, notify } = useContext(CartContext);
  const { wishList, dispatch } = useContext(WishContext);

  const handleAddAmount = (id) => {
    shoppingCart.forEach((item) => {
      if (item.id === id) {
        item.amount = item.amount + 1;
      }
    });
    setShoppingCart([...shoppingCart]);
  };
  const handleRestAmount = (id) => {
    shoppingCart.forEach((item) => {
      if (item.id === id && item.amount > 1) {
        item.amount = item.amount - 1;
      }
    });
    setShoppingCart([...shoppingCart]);
  };

  const handleRemove = (id, name) => {
    if (wish) {
      dispatch({
        type: ACTIONS.REMOVE_WISH,
        payload: { id },
      });
      notify(`${name} removed from the Wish List`);
    } else {
      let newArray = shoppingCart.filter((item) => item.id !== id);
      setShoppingCart(newArray);
      notify(`${name} removed from the Shopping Cart`);
    }
  };

  const handleAddToCart = (data) => {
    setShoppingCart([...shoppingCart, data]);
    notify(`${data.name} added to the Shopping Cart`);
  };

  return (
    <Table
      className="cart__table"
      aria-label="Example static collection table"
      css={{
        height: 'auto',
        minWidth: 'auto',
      }}
      bordered
    >
      {wish ? (
        <Table.Header>
          <Table.Column>PRODUCT</Table.Column>
          <Table.Column>PRICE</Table.Column>
          <Table.Column></Table.Column>
          <Table.Column></Table.Column>
        </Table.Header>
      ) : (
        <Table.Header>
          <Table.Column>PRODUCT</Table.Column>
          <Table.Column>PRICE</Table.Column>
          <Table.Column>AMOUNT</Table.Column>
          <Table.Column></Table.Column>
          <Table.Column></Table.Column>
          <Table.Column></Table.Column>
        </Table.Header>
      )}

      {wish ? (
        <Table.Body>
          {wishList.map((item, index) => {
            return (
              <Table.Row key={index} css={{}}>
                <Table.Cell>
                  <User
                    squared
                    src={`${item?.img}`}
                    css={{ p: 0, height: 'max-content' }}
                    size="xl"
                  ></User>
                </Table.Cell>
                <Table.Cell css={{ textAlign: 'center' }}>
                  € {item?.price}
                </Table.Cell>
                <Table.Cell css={{ textAlign: 'center' }}>
                  <Button
                    auto
                    ghost
                    color="secondary"
                    onClick={() => handleAddToCart({ ...item, amount: 1 })}
                  >
                    <ShoppingCartCheckoutIcon />
                  </Button>
                </Table.Cell>
                <Table.Cell css={{ textAlign: 'center' }}>
                  <Button
                    placeholder="Remove from Wish List"
                    auto
                    ghost
                    color="error"
                    onClick={() => handleRemove(item?.id, item.name)}
                  >
                    <DeleteForeverIcon />
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      ) : (
        <Table.Body>
          {shoppingCart.map((item, index) => {
            return (
              <Table.Row key={index} css={{}}>
                <Table.Cell>
                  <User
                    squared
                    src={`${item?.img}`}
                    css={{ p: 0, height: 'max-content' }}
                    name={item.name}
                    size="xl"
                  ></User>
                </Table.Cell>
                <Table.Cell css={{ textAlign: 'center' }}>
                  € {item.price}
                </Table.Cell>
                <Table.Cell css={{ textAlign: 'center' }}>
                  {item.amount}
                </Table.Cell>
                <Table.Cell>
                  <Button auto ghost onClick={() => handleAddAmount(item.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </Table.Cell>
                <Table.Cell css={{ textAlign: 'center' }}>
                  <Button auto ghost onClick={() => handleRestAmount(item.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                </Table.Cell>
                <Table.Cell css={{ textAlign: 'center' }}>
                  <Button
                    auto
                    ghost
                    color="error"
                    onClick={() => handleRemove(item.id, item.name)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      )}
    </Table>
  );
};

export default ShoppingCartTable;
