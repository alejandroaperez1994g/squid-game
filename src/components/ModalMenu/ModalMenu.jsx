import { Modal } from "@nextui-org/react";
import { useContext } from "react";
import ShoppingCartTable from "../ShoppingCartTable/ShoppingCartTable";
import { WishContext } from "../../contexts/WishContext";
import "./ModalMenu.css";

const ModalMenu = ({ visible, closeHandler }) => {
  const { wishList } = useContext(WishContext);

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        className="modal"
      >
        <Modal.Header
          // css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
          css={{ borderBottom: "2px solid black" }}
        >
          <img
            src={require("../../assets/img/wish-list-title.png")}
            alt="title"
          />
          <hr />
        </Modal.Header>
        <Modal.Body>
          {wishList.length === 0 ? (
            <img
              className="empty__title"
              src={require("../../assets/img/empty-wish-list.png")}
              alt=""
            />
          ) : (
            <ShoppingCartTable wish={true} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalMenu;
