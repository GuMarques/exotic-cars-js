import { FC } from "react";
import { LogoContainer, LogoExotic, LogoCars, SecondContainer } from "./styles";

const Logo: FC<{}> = (_) => {
  return (
    <LogoContainer>
      <SecondContainer>
      <LogoExotic>Exotic</LogoExotic>
      <LogoCars>Cars</LogoCars>
      </SecondContainer>
    </LogoContainer>
  );
};

export default Logo;
