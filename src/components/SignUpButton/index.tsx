import { FC } from "react";
import { Button, ButtonContainer } from "./styles";

interface SignUpButtonProps {}

const SignUpButton: FC<SignUpButtonProps> = (props) => {
  return (
    <ButtonContainer>
      <Button>Sign Up</Button>
    </ButtonContainer>
  );
};

export default SignUpButton;
