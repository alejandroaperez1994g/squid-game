import { Dropdown, Text, Avatar } from "@nextui-org/react";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import ModalMenu from "../ModalMenu/ModalMenu";

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
      <ModalMenu visible={visible} closeHandler={closeHandler} />
    </>
  );
};

export default DropdownMenu;
