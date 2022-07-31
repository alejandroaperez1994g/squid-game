import { Dropdown, Text, Avatar } from '@nextui-org/react';
import { CartContext, UserContext, WishContext } from '../../contexts';
import { useContext, useState } from 'react';
import { ACTIONS } from '../../reducers/wishReducer';
import ModalMenu from '../ModalMenu/ModalMenu';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const DropdownMenu = ({ email, photo }) => {
  const { userData, setUserData } = useContext(UserContext);
  const { setShoppingCart } = useContext(CartContext);
  const { dispatch } = useContext(WishContext);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const onSignOut = () => {
    signOut(auth).then(() => {
      setUserData(null);
      setShoppingCart([]);
      dispatch({ type: ACTIONS.EMPTY_WISH });
    });
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          {userData.photo ? (
            <Avatar
              size="lg"
              as="button"
              src={photo || 'https://i.pravatar.cc/150?u=a042581f4e29026024d'}
              referrerPolicy="no-referrer"
              color="#fff"
              bordered
              zoomed
            />
          ) : (
            <Avatar
              size="lg"
              as="button"
              text={userData.email.at(0).toUpperCase()}
              referrerPolicy="no-referrer"
              bordered
              color="secondary"
              textColor="white"
            />
          )}
        </Dropdown.Trigger>
        <Dropdown.Menu color="secondary" css={{ width: 'auto' }}>
          <Dropdown.Item key="profile" css={{ height: '$18', width: 'auto' }}>
            <Text b color="inherit" css={{ d: 'flex' }}>
              Signed in as
            </Text>
            <Text b color="inherit" css={{ d: 'flex' }}>
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
