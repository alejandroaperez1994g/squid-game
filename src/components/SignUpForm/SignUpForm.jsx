import { useAuth } from '../../hooks';
import { Input, Button } from '@nextui-org/react';

const SignUpForm = () => {
  const {
    handleSignUpWithEmailAndPassword,
    email,
    setEmail,
    password,
    setPassword,
    repPassword,
    setRepPassword,
  } = useAuth();
  return (
    <form className="section__form" action="" method="">
      <Input
        labelPlaceholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input.Password
        labelPlaceholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input.Password
        labelPlaceholder="Confirm Password"
        value={repPassword}
        onChange={(e) => setRepPassword(e.target.value)}
      />
      <p className="forgotPassword">Forgot password?</p>
      <Button color="secondary" onClick={handleSignUpWithEmailAndPassword}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
