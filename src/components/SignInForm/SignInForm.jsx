import { useAuth } from '../../hooks';
import { Input, Button } from '@nextui-org/react';

const SignInForm = () => {
  const { handleSignInWithEmail, email, setEmail, password, setPassword } =
    useAuth();
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

      <p className="forgotPassword">Forgot password?</p>
      <Button color="secondary" onClick={handleSignInWithEmail}>
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
