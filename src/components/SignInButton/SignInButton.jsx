import { Button } from '@nextui-org/react';

const SignInButton = ({ text, action, icon }) => {
  return (
    <Button
      ghost
      auto
      borderWeight="extrabold"
      size="lg"
      icon={
        <img
          className="google_icon"
          //   src={require(`../../assets/img/google.png`)}
          src={icon}
          alt="google"
        />
      }
      css={{
        width: '50%',
        background: 'white',
        color: 'black',
        border: '1px solid gray',
      }}
      onClick={action}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
