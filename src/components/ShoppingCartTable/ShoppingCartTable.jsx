import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Table, Button, User } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCartTable = () => {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

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

  const handleRemove = (id) => {
    let newArray = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(newArray);
  };

  return (
    <Table
      className="cart__table"
      aria-label="Example static collection table"
      css={{
        height: "auto",
        minWidth: "auto",
      }}
      bordered
    >
      <Table.Header>
        <Table.Column>PRODUCT</Table.Column>
        <Table.Column>PRICE</Table.Column>
        <Table.Column>AMOUNT</Table.Column>
        <Table.Column></Table.Column>
        <Table.Column></Table.Column>
        <Table.Column></Table.Column>
      </Table.Header>
      <Table.Body>
        {shoppingCart.map((item, index) => {
          return (
            <Table.Row key={index} css={{}}>
              <Table.Cell>
                <User
                  squared
                  src={require(`../../assets/img/products/${item.img}`)}
                  css={{ p: 0, height: "max-content" }}
                  name={item.name}
                  size="xl"
                ></User>
              </Table.Cell>
              <Table.Cell css={{ textAlign: "center" }}>
                € {item.price}
              </Table.Cell>
              <Table.Cell css={{ textAlign: "center" }}>
                {item.amount}
              </Table.Cell>
              <Table.Cell>
                <Button auto ghost onClick={() => handleAddAmount(item.id)}>
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </Table.Cell>
              <Table.Cell css={{ textAlign: "center" }}>
                <Button auto ghost onClick={() => handleRestAmount(item.id)}>
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
              </Table.Cell>
              <Table.Cell css={{ textAlign: "center" }}>
                <Button
                  auto
                  ghost
                  color="error"
                  onClick={() => handleRemove(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default ShoppingCartTable;
