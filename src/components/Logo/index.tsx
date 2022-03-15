import { FC } from "react";
import CustomLink from "../CustomLink";
import { LogoContainer, LogoExotic, LogoCars, SecondContainer } from "./styles";

const Logo: FC<{}> = (_) => {
  return (
    <LogoContainer>
      <CustomLink to="/">
        <SecondContainer>
          <LogoExotic>Exotic</LogoExotic>
          <LogoCars>Cars</LogoCars>
        </SecondContainer>
      </CustomLink>
    </LogoContainer>
  );
};

export default Logo;
