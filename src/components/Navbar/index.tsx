import { FC } from "react";
import { NavbarContainer } from "./styles";
import { Logo, SearchBox, SignUpButton, LoginButton } from "../index";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props) => {
  return (
    <NavbarContainer>
      <Logo />
      <SearchBox />
      {/* <Buttons /> */}
      <SignUpButton />
      <LoginButton />
    </NavbarContainer>
  );
};

export default Navbar;
