import { FC } from "react";
import { Button, ButtonContainer } from "./styles";

interface LoginButtonProps {}

const LoginButton: FC<LoginButtonProps> = (props) => {
  return (
    <ButtonContainer>
      <Button>Login</Button>
    </ButtonContainer>
  );
};

export default LoginButton;
