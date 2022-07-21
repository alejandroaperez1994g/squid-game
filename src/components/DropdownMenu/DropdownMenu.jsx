import { Dropdown, Text, Avatar, Modal, Link, Image } from "@nextui-org/react";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";

const DropdownMenu = ({ email, photo }) => {
  const { setUserData } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const onSignOut = () => {
    setUserData(null);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <Avatar
            size="lg"
            as="button"
            src={photo || "https://i.pravatar.cc/150?u=a042581f4e29026024d"}
            referrerPolicy="no-referrer"
            color="secondary"
            bordered
          />
        </Dropdown.Trigger>
        <Dropdown.Menu color="secondary" css={{ width: "auto" }}>
          <Dropdown.Item key="profile" css={{ height: "$18", width: "auto" }}>
            <Text b color="inherit" css={{ d: "flex" }}>
              Signed in as
            </Text>
            <Text b color="inherit" css={{ d: "flex" }}>
              {email}
            </Text>
          </Dropdown.Item>
          <Dropdown.Item key="wish" withDivider>
            <Text onClick={handler}>My Wish List</Text>
          </Dropdown.Item>
          <Dropdown.Item key="logout" color="error" withDivider>
            <Text onClick={onSignOut} color="error">
              Log Out
            </Text>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
        >
          <Text color="#363449">
            Photo by{" "}
            <Link
              color
              rel="noopener noreferrer"
              target="_blank"
              href="https://unsplash.com/@anniespratt"
            >
              Annie Spratt
            </Link>{" "}
            on{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://unsplash.com/s/visual/ef7937f3-0d44-43eb-b992-28050748f999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </Link>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            width={400}
            height={490}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DropdownMenu;
